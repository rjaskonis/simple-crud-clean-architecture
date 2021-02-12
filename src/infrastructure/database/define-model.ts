import { Sequelize, DataTypes, ModelCtor, Model } from "sequelize/types";

export function defineModel(sequelize: Sequelize, modelName: string, tableName: string, structure: object): ModelCtor<Model<object, object>> {
    const Model = sequelize.define(
        modelName,
        {
            ...structure,
            _deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
        },
        {
            tableName,
            timestamps: false,
        }
    );

    Model.prototype.delete = function () {
        return this.update({ _deleted: true });
    };

    Model.prototype.undelete = function () {
        return this.update({ _deleted: false });
    };

    return Model;
}
