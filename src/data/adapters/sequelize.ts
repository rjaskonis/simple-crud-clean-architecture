import { Repository } from "@data/repository";

export class SequelizeAdapter implements Repository {
    execute: (command: string) => Promise<void>;

    query?: (command: string) => Promise<any>;
}
