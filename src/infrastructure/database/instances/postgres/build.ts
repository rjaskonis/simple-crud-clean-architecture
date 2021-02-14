import { SequelizeAdapter } from "@/data/adapters/sequelize";
import settings from "@infrastructure/database/instances/settings";
import usuarioSchemaModel from "@infrastructure/database/schema/models/usuario";
import { Sequelize } from "sequelize";

async function syncDatabaseStructure() {
    const databaseSettings: object = settings["pdb"];
    const databaseConnection = new Sequelize(databaseSettings);

    const Usuario = await usuarioSchemaModel.bind(databaseConnection);

    await Usuario.drop();

    await Usuario.sync({ alter: true });
}

syncDatabaseStructure();
