import { Interactor } from "@domain/interactor";

export interface Repository {
    execute?: (command: string) => Promise<void>;

    query?: (command: string) => Promise<any>;

    read?: (path: string) => Promise<any>;

    store?: (param: Interactor.Data | string) => Promise<any>;

    findAll?: () => Promise<Array<any>>;

    findOne?: (lambda: any) => Promise<any>;
}
