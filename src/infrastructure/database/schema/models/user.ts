import { Sequelize, DataTypes } from "sequelize";
import { SchemaModel } from "@infrastructure/database/schema/model";

const tableName = "users";
const modelName = tableName;
const structure = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
};

const schemaModel: SchemaModel = new SchemaModel(modelName, tableName, structure);

export default schemaModel;
