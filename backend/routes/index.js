const express = require('express');
const router = express.Router();
const userSignUpController = require('../controller/user/userSignUp');
const userSignInController= require('../controller/user/userSignin');

// User Sign Up Route
router.post('/signup', userSignUpController);

//user login route
router.get('/login', userSignInController);




module.exports = router;