'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            user.belongsTo(models.role, {
                foreignKey: 'role_id',
                as: 'role',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            user.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    user.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
            employee_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'user',
        }
    )
    return user
}
