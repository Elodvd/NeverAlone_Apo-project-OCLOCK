const express = require('express');
const authController = require('../controllers/authController');
const mainController = require('../controllers/mainController');
const profilController = require('../controllers/profilController');
const errorController = require('../controllers/errorController');


const router = express.Router();

// home path
router.get('/', mainController.getHomePage);

//login path
router.post('/login', authController.loginAction);

//signin path
router.post('/signin', authController.signinAction);

//profil path
router.get('/profil', profilController.getAll);

//route pour le profil d'un utilisateur
router.route
    .get('/profil/:id', profilController.getOne)
    .post('/profil/:id', profilController.update)
    .delete('/profil/:id', profilController.delete);


router.use(errorController.error);

// Answer 404
router.use(errorController.notFound);

module.exports = router;




