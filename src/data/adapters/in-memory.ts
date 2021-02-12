import { Entity } from "@domain/entity";
import { Repository } from "@data/repository";
import { Interactor } from "@domain/interactor";

export class InMemoryAdapter implements Repository {
    private readonly database: Array<Entity>;

    constructor() {
        this.database = [];
    }

    async store(data: Interactor.Data): Promise<void> {
        this.database.push({ id: this.database.length + 1, ...data });
    }

    async findAll(): Promise<Array<Entity>> {
        return this.database;
    }

    async findOne(lambda: any): Promise<Entity | undefined> {
        return this.database.find(lambda);
    }
}
