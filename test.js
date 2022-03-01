const { User } = require('./Back/app/models');

User.findAll()
    .then((users) => {
       for( let user of users) {
         console.log(user);
       }
     });