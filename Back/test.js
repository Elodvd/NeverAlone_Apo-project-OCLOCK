const dotenv = require('dotenv');
dotenv.config();

const User = require('./app/models/user');
const Event = require('./app/models/event');
const Category = require('./app/models/category');


Event.findByPk(1).then(event => {
  console.log(event)
})

