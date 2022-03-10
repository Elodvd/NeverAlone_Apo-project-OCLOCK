const express = require('express');
const userController = require('../controllers/userController');
//const mainController = require('../controllers/mainController');
const errorController = require('../controllers/errorController');
const eventController = require('../controllers/eventController');


const midAuthToken = require('../middlewares/authToken');

const router = express.Router();

// home path
//router.get('/', mainController.getHomePage);

//login path
router.post('/login', userController.loginAction);

//signin path
router.post('/signin', userController.signinAction);

router
    .route('/events')
    .get(midAuthToken, eventController.getAll)
    .post(midAuthToken, eventController.create);

router
    .route('/events/:id')
    .get(midAuthToken, eventController.getOne)
    .patch(midAuthToken, eventController.update)
    .delete(midAuthToken, eventController.delete);

//route pour le profil d'un utilisateur
router.delete('/profils/:id', midAuthToken, userController.deleteAction);

router.use(errorController.error);

// Answer 404
router.use(errorController.notFound);

module.exports = router;
