const { User } = require('./app/models');

User.findAll()
    .then((users) => {
       for( let user of users) {
         console.log(user);
       }
     });