const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class Event extends Model {}

Event.init(
    {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATE,
        capacity: DataTypes.INTEGER,
        price: DataTypes.STRING,
        adress: DataTypes.STRING,
        city: DataTypes.STRING,
        category: DataTypes.STRING,
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'event',
    }
);

module.exports = Event;
