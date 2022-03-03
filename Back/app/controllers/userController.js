const { User } = require('../models');
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const userController = {

  async signinAction(req, res) {
    try {
    
      // if user already exists
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      if (user) {
        return res
          .status(401)
          .json({error: "Cet email est déjà utilisé par un utilisateur."});
      }
      // if the email is invalid
      if (!emailValidator.validate(req.body.email)) {
        return res
          .status(401)
          .json({ error: "Cet email n'est pas valide."});
      }

      //if the password and password confirmation do not match
      if (req.body.password !== req.body.passwordConfirm) {
        return res
          .status(401)
          .json({error: "La confirmation du mot de passe ne correspond pas."});
      }

      // we will encrypt the password
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(req.body.password, salt);

      // we will created the user
      const newUser = new User({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: encryptedPassword,
        birthday : req.body.birthday,
        image: req.body.image
      });

      //we are waiting for the user to be registered
      await newUser.save();
      res.redirect('/login');
      
    }catch(err){
      console.trace(err);
      res
        .status(500)
        .send(err.message);
    };
  },

  async loginAction(req, res) {
    try {
      //we're trying to recover user who has a given email
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res
          .status(401)
          .json({ error: 'Erreur de récupération' });
      }

      //if we have a user, we test if password is valid
      if (req.body.password !== user.password) {
        return res
          .status(401)
          .json({error: "Erreur de saisie de l'identifiant ou du mot de passe"});
      }

      res
        .status(200)
        .json({
        token: jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '24h',
        }),
      });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err.message);
    }
  },

  logout: (req, res) => {
    req.session.user = false;
    return res.redirect('/');
  },

    async loginAction(req, res) {
        try {
            // on tente de récupérer l'utilisateur qui possède l'email donné
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if (!user) {
                return res
                    .status(401)
                    .json({ error: 'Utilisateur non trouvé !' });
            }

            // Si on a un utilisateur, on teste si le mot de passe est valide
            if (req.body.password !== user.password) {
                return res
                    .status(401)
                    .json({ error: 'Mot de passe incorrect !' });
            }

            

            res.status(200).json({
                user,
                token: jwt.sign(
                    
                    { user_id: user.id },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '24h' }
                ),
            });

            

        } catch (err) {
            console.trace(err);
            res.status(500).send(err.message);
        }
    },
};

module.exports = userController;
