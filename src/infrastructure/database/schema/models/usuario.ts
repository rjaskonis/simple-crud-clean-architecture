import { Sequelize, DataTypes } from "sequelize";
import { SchemaModel } from "@infrastructure/database/schema/model";

const tableName = "usuarios";
const modelName = tableName;
const structure = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    sobrenome: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    salt: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    datacriacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};

const schemaModel: SchemaModel = new SchemaModel(modelName, tableName, structure);

export default schemaModel;
