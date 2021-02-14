import { SchemaModel } from "@/infrastructure/database/schema/model";
import { Repository } from "@data/repository";
import { Sequelize, Options, ModelCtor, Model } from "sequelize";

export class SequelizeAdapter implements Repository {
    constructor(private readonly connection: Sequelize, private schemaModel: SchemaModel) {
        schemaModel.bind(connection);
    }

    async findAll(): Promise<Array<any>> {
        return [];
    }

    execute: (command: string) => Promise<void>;

    query?: (command: string) => Promise<any>;
}
