const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class User extends Model {
  get fullname() {
    return this.firstname + ' ' + this.lastname;
  }
}

User.init(
  {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'user',
  }
);

module.exports = User;
