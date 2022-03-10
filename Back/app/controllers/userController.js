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
          email: req.body.email,
        },
      });
      if (user) {
        return res
            .status(401)
            .json({error: 'Erreur de saisie du login et/ou du mot de passe.' });
      }
      // if the email is invalid
      if (!emailValidator.validate(req.body.email)) {
        return res
          .status(401)
          .json({ error: 'Erreur de saisie du login et/ou du mot de passe.' });
        }

      //if the password and password confirmation do not match
      if (req.body.password !== req.body.passwordConfirm) {
        return res
          .status(401)
          .json({ error: 'Erreur de saisie du login et/ou du mot de passe.' });
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
        birthday: req.body.birthday,
        image: req.body.image,
      });

      //we are waiting for the user to be registered
      await newUser.save();

      res.status(200).json({
        message: 'compte crée'
      });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err.message);
    }
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
        return res.status(401).json({ error: 'Erreur de récupération' });
      }

      //if we have a user, we test if password is valid

      const validPwd = await bcrypt.compare(req.body.password, user.password);
      if (!validPwd) {
        return res.render('login', {
          error: 'Erreur de saisie du login et/ou du mot de passe',
        });
      }

      const newUser = user;
      //remplacer delete par excluded avec sequelize dans le model ?
      // delete newUser.password;
      console.log('Retour de newUser:', newUser);

      res.status(200).json({
        newUser,
        token: jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '24h',
        }),
      });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err.message);
    }
  },

  //delete a profil
  async deleteAction(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const result = await User.destroy({
        where: { id },
      });
      if (!result) {
        return res
            .status(404)
            .json({ error: `L'utilisateur n'exite pas` });
      }
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;

