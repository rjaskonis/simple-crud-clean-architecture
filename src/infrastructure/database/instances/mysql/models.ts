import { SequelizeAdapter } from "@/data/adapters/sequelize";
import settings from "@infrastructure/database/instances/settings";
import userSchemaModel from "@infrastructure/database/schema/models/user";

async function syncDatabaseStructure() {
    const repository: SequelizeAdapter = new SequelizeAdapter(settings["db-local"]);

    const User = await repository.bindModel(userSchemaModel);

    await User.drop();

    await User.sync({ alter: true });
}

syncDatabaseStructure();
