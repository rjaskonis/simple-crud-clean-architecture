import { Interactor } from "@/domain/interactor";
import { SchemaModel } from "@infrastructure/database/schema/model";
import { Repository } from "@data/repository";
import { Sequelize, ModelCtor, Model } from "sequelize";
import { Entity } from "@domain/entity";

export class SequelizeAdapter implements Repository {
    model: ModelCtor<Model<object, object>>;

    constructor(private readonly connection: Sequelize, private schemaModel: SchemaModel) {
        this.model = schemaModel.bind(connection);
    }

    execute: (command: string) => Promise<void>;

    query?: (command: string) => Promise<any>;

    async findAll(): Promise<Array<any>> {
        return this.model.findAll({ raw: true });
    }

    async findOne(param: any): Promise<any> {
        return this.model.findOne({ ...param, raw: true });
    }

    async store(data: Entity): Promise<object> {
        if (data.id) {
            return this.model.update(data, { where: { id: data.id } });
        } else {
            return this.model.create(data);
        }
    }

    async delete(param: any): Promise<any> {
        return this.model.destroy(param);
    }
}
