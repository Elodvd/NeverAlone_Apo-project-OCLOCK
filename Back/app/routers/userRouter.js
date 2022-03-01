const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();


router.route('/signin')
    .post(controller.signinAction);

router.route('/login')
    .post(controller.loginAction);

router.route('/logout')
    .get(controller.logout);

module.exports = router;