import { Sequelize, DataTypes } from "sequelize/types";
import { defineModel } from "@infrastructure/database/define-model";

const tableName = "users";
const modelName = tableName;
const structure = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
};

module.exports = { bind: (sequelize: Sequelize) => defineModel(sequelize, modelName, tableName, structure) };
