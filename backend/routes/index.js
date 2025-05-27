const express = require('express');
const router = express.Router();
const userSignUpController = require('../controller/user/userSignUp');
const userSignInController= require('../controller/user/userSignin');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');

// User Sign Up Route
router.post('/signup', userSignUpController);

//user login route
router.post('/signin', userSignInController);

router.get("/user-details",authToken,userDetailsController)




module.exports = router;