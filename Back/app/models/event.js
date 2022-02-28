const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class Event extends Model {}

Event.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:DataTypes.STRING,
    date_hour: DataTypes.INTEGER,
    price: DataTypes.STRING,
    adress: DataTypes.STRING,
    image: DataTypes.STRING,

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
