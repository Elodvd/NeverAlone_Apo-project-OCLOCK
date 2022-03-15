/* It's defining a variable called `sequelize` that is an instance of the Sequelize class. */
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PGURL, {
    define: {
        underscored: true,
    },
});
module.exports = sequelize;
