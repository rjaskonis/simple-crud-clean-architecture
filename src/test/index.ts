import { User } from "@domain/entities/user";
import { Interactor } from "@domain/interactor";
import { UserInteractor } from "@domain/usecases/user.interactor";
import { SequelizeAdapter } from "@data/adapters/sequelize";
import { InMemoryAdapter } from "@/data/adapters/in-memory";

async function run() {
    const renne = new User("Renne", new Date("1989-07-15 11:15"));
    const yasmin = new User("Yasmin", new Date("2019-10-14 10:20"));

    // const sequelizeRepository: SequelizeAdapter = new SequelizeAdapter();
    const inMemoryRepository: InMemoryAdapter = new InMemoryAdapter();
    const interactor: UserInteractor = new UserInteractor(inMemoryRepository);

    interactor.store(renne);
    interactor.store(yasmin);

    const users = await interactor.findAll();

    const foundUser = await interactor.findById(2);

    console.log(foundUser);
}

run();
