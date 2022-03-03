const dotenv = require('dotenv');
dotenv.config();

const User = require('./app/models/user');
const Event = require('./app/models/event');
const Category = require('./app/models/category');


User.findOne({
  where: {
    email: "raf@raf.raf"
  }
}).then(user => {
  console.log(user)
})

