const dotenv = require('dotenv');
dotenv.config();

const User = require('./app/models/user');
const Event = require('./app/models/event');
const Category = require('./app/models/category');


User.findOne({
  where: {
    email: "far@far.far"
  }
}).then(user => {
  console.log(user)
})