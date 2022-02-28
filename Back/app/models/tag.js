const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class Tag extends Model {}

Tag.init(
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
    tableName: 'tag',
  }
);

module.exports = Tag;
