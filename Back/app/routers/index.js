const express = require('express');
const userController = require('../controllers/userController');
//const mainController = require('../controllers/mainController');
const errorController = require('../controllers/errorController');
const eventController = require('../controllers/eventController');


//const midAuthToken = require('../middlewares/authToken');

const router = express.Router();

/* This is telling the router to use the userController.loginAction function when a post request is
made to the /login path. */
router.post('/login', userController.loginAction);

/* This is telling the router to use the userController.signinAction function when a post request is
made to the /signin path. */
router.post('/signin', userController.signinAction);

/* This is a route that will get all events from the database and post a new event to the database. */
router
    .route('/events')
    .get(eventController.getAll)
    .post(eventController.create);

/* This is a route that will get one, update and delete an event from the database. */
router
    .route('/events/:id')
    .get(eventController.getOne)
    .patch(eventController.update)
    .delete(eventController.delete);

/* This is a route that will delete a user from the database. */
router.delete('/profils/:id', userController.deleteAction);

/* This is a route that will update and delete an event from the database. */
router.route('/profils/:id')
  .patch( userController.updateAction)
  .delete( userController.deleteAction);

/* This is telling the router to use the errorController.error function when an error occurs. */
router.use(errorController.error);

/* This is telling the router to use the errorController.notFound function when a 404 error occurs. */
router.use(errorController.notFound);

module.exports = router;
