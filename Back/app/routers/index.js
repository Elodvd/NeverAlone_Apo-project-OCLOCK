const express = require('express');
const userController = require('../controllers/userController');
//const mainController = require('../controllers/mainController');
const errorController = require('../controllers/errorController');
const eventController = require('../controllers/eventController');

const router = express.Router();

// home path
//router.get('/', mainController.getHomePage);

//login path
router.post('/login', userController.loginAction);

//signin path
router.post('/signin', userController.signinAction);

router.route('/events')
    .get(eventController.getAll)
    .post(eventController.create);
    
router.route('/events/:id')
    .get(eventController.getOne)    
    .patch(eventController.update)
    .delete(eventController.delete);

//route pour le profil d'un utilisateur
router.delete('/profils/:id', userController.deleteAction);


router.use(errorController.error);

// Answer 404
router.use(errorController.notFound);

module.exports = router;




