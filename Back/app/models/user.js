/* This class is a sequelize model that represents the user table in the database */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class User extends Model {
    get fullname() {
        return this.first_name + ' ' + this.last_name;
    }
}

User.init(
    {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        pseudo: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        postal_code: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        sequelize,
        tableName: 'user',
    }
);

module.exports = User;
