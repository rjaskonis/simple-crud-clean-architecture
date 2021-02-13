import { Interactor } from "@domain/interactor";
import { User } from "@domain/entities/user";
import { Repository } from "@/data/repository";

export class UserInteractor implements Interactor {
    constructor(private readonly repository: Repository) {}

    async query(command: string): Promise<Array<User>> {
        if (this.repository.query) return this.repository.query(command);
        else return [];
    }

    async findAll(): Promise<Array<User>> {
        if (this.repository.findAll) {
            return this.repository.findAll();
        } else return [];
    }

    async findById(id: number | string): Promise<User | undefined> {
        if (this.repository.findOne) {
            const user: User = await this.repository.findOne((user: User) => user.id == id);

            return user;
        }
    }

    async store(user: Interactor.Data): Promise<any> {
        if (this.repository.store) return this.repository.store(user);
    }
}
