const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class Category extends Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        color: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        sequelize,
        tableName: 'category',
    }
);

module.exports = Category;
