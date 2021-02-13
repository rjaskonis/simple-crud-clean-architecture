import { User } from "@domain/entities/user";
import { Usuario } from "@domain/entities/usuario";
import { Interactor } from "@domain/interactor";
import { UserInteractor } from "@domain/usecases/user.interactor";
import { UsuarioInteractor } from "@domain/usecases/usuario.interactor";
import { SequelizeAdapter } from "@data/adapters/sequelize";
import { InMemoryAdapter } from "@/data/adapters/in-memory";

async function run() {
    const sleep = (timeout: number) => new Promise((resolve) => setTimeout(() => resolve(null), timeout));
    // const repository: SequelizeAdapter = new SequelizeAdapter();
    const repository: InMemoryAdapter = new InMemoryAdapter();

    // const interactor: UserInteractor = new UserInteractor(repository);

    // const renne = new User("Renne", new Date("1989-07-15 11:15"));
    // const yasmin = new User("Yasmin", new Date("2019-10-14 10:20"));

    // interactor.store(renne);
    // interactor.store(yasmin);

    // const users = await interactor.findAll();

    // const foundUser = await interactor.findById(2);

    // console.log(foundUser);

    const interactor: UsuarioInteractor = new UsuarioInteractor(repository);

    const renne = new Usuario("Renne", "Jaskonis", "rjaskonis", "legal", "123");

    await interactor.store(renne);

    const usuarios = await interactor.findAll();

    console.log(usuarios);
}

run();
