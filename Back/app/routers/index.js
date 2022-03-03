const express = require('express');
const userController = require('../controllers/userController');
//const mainController = require('../controllers/mainController');
//const errorController = require('../controllers/errorController');

const router = express.Router();

// home path
//router.get('/', mainController.getHomePage);

//login path
router.post('/login', userController.loginAction);

//signin path
router.post('/signin', userController.signinAction);


//route pour le profil d'un utilisateur
//router.delete('/prof/:id', userController.deleteAction);


//router.use(errorController.error);

// Answer 404
//router.use(errorController.notFound);

module.exports = router;




