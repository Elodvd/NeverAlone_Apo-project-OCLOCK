const { User } = require('../models');
//const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const userController = {

  loginAction: async (req, res) => {
    try {
      //    console.log(req.body);
      // on tente de récupérer l'utilisateur qui possède l'email donné
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      
      if (!user) {
        return res.status(401)
      }
  
      // Si on a un utilisateur, on teste si le mot de passe est valide
      const validPwd = await bcrypt.compare(req.body.password, user.password);
      if (!validPwd) {
        return res.status(401)
      }
  
      //on genere le token ici !
      
    } catch (err) {
      console.trace(err);
      res.status(500).send(err.message);
    }

  }

}






module.exports = userController;
