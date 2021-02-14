import { Model, ModelCtor, Sequelize } from "sequelize";
import { Usuario } from "@domain/entities/usuario";
import { UsuarioInteractor } from "@domain/usecases/usuario.interactor";
import { SequelizeAdapter } from "@data/adapters/sequelize";
import { InMemoryAdapter } from "@data/adapters/in-memory";
import settings from "@infrastructure/database/instances/settings";
import usuarioSchemaModel from "@infrastructure/database/schema/models/usuario";

async function run() {
    const sleep = (timeout: number) => new Promise((resolve) => setTimeout(() => resolve(null), timeout));
    const databaseSettings: object = settings["pdb"];
    const databaseConnection = new Sequelize(databaseSettings);
    const repository: SequelizeAdapter = new SequelizeAdapter(databaseConnection, usuarioSchemaModel);
    // const repository: InMemoryAdapter = new InMemoryAdapter();

    // const interactor: UserInteractor = new UserInteractor(repository);

    // const renne = new User("Renne", new Date("1989-07-15 11:15"));
    // const yasmin = new User("Yasmin", new Date("2019-10-14 10:20"));

    // interactor.store(renne);
    // interactor.store(yasmin);

    // const usuarios = await interactor.findAll();

    // const foundUser = await interactor.findById(2);

    // console.log(foundUser);

    const interactor: UsuarioInteractor = new UsuarioInteractor(repository);

    // const renne = new Usuario("Renne", "Jaskonis", "rjaskonis", "legal", "123");
    // const yasmin = new Usuario("Yasmin", "Jaskonis", "ymjaskonis", "top", "456");

    // await interactor.store(renne);
    // await interactor.store(yasmin);

    const usuarios: Array<Usuario> = await interactor.findAll();
    const usuario = await interactor.findOne({ where: { id: 2 } });

    if (usuario) {
        usuario.sobrenome = "Marrichi Jaskonis";
        interactor.store(usuario);
    }

    console.log(usuarios);
    console.log(usuario);
}

run();
