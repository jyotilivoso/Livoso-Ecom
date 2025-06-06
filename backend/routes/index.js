const express = require('express');
const router = express.Router();
const userSignUpController = require('../controller/user/userSignUp');
const userSignInController= require('../controller/user/userSignin');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const {createTask, updateTask}= require('../controller/crudTask');
const allTaskController = require('../controller/alltask');


// User Sign Up Route
router.post('/signup', userSignUpController);

//user login route
router.post('/signin', userSignInController);

router.get("/user-details",authToken,userDetailsController)
// Create Task Route
router.post('/create-task',  createTask);
router.get('/get-all-task', allTaskController.allTaskController);
router.put('/update-task/:id', updateTask);
router.get('/get-task/:id', allTaskController.getOneTaskById);





module.exports = router;