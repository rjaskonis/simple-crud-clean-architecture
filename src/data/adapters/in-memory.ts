import { Entity } from "@domain/entity";
import { Repository } from "@data/repository";

export class InMemoryAdapter implements Repository {
    private readonly database: Array<Entity>;

    constructor() {
        this.database = [];
    }

    async findAll(): Promise<Array<Entity>> {
        return this.database;
    }

    async findOne(param: any): Promise<Entity | undefined> {
        return this.database.find((e: Entity) => e.id == param);
    }

    async store(data: Entity): Promise<void> {
        this.database.push({ id: this.database.length + 1, ...data });
    }
}
