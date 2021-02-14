import { SequelizeAdapter } from "@/data/adapters/sequelize";
import settings from "@infrastructure/database/instances/settings";
import userSchemaModel from "@infrastructure/database/schema/models/user";
import { Sequelize } from "sequelize";

async function syncDatabaseStructure() {
    const databaseSettings: object = settings["db-local"];
    const databaseConnection = new Sequelize(databaseSettings);

    const User = await userSchemaModel.bind(databaseConnection);

    await User.drop();

    await User.sync({ alter: true });
}

syncDatabaseStructure();
