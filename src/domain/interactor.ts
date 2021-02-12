import { Entity } from "@domain/entity";

export interface Interactor {
    query: (command: string) => Promise<any>;

    findAll: () => Promise<Array<Entity>>;

    findById: (id: number | string) => Promise<any>;

    store: (data: Interactor.Data) => Promise<void>;
}

export namespace Interactor {
    export type Data = Omit<Entity, "id">;
}
