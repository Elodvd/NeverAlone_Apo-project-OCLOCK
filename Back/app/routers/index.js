const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


// user signup/login

router.post('/login', userController.loginAction);



module.exports = router;




