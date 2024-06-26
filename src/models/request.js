'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class request extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            request.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    request.init(
        {
            employee_id: DataTypes.INTEGER,
            request_name: DataTypes.STRING,
            request_date: DataTypes.DATE,
            request_information: DataTypes.STRING,
            file: DataTypes.STRING,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'request',
        }
    )
    return request
}
