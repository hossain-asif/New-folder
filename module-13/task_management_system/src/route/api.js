
const express = require('express');
const UserController = require('../controller/userController');
const taskController = require('../controller/taskController');
const AuthMiddleware = require('../middleware/AuthMiddleware');








const router = express.Router();


//registration & login
router.post("/registration",UserController.registration);
router.post("/login",UserController.login);


//before login
router.get("/verifyEmail/:email",UserController.verifyEmail);
router.get("/verifyOTP/:email/:otp",UserController.verifyOTP);
router.get("/passwordReset/:email/:otp/:password",UserController.passwordReset);


//after login
router.get("/profileDetails",AuthMiddleware,UserController.profileDetails);
router.post("/profileUpdate",AuthMiddleware,UserController.profileUpdate);


//after login -> task crud
router.post("/task/create",AuthMiddleware,taskController.taskCreate);
router.post("/task/update/:id",AuthMiddleware,taskController.taskUpdate);
router.get("/task/delete/:id",AuthMiddleware,taskController.taskDelete);
router.get("/task/read",AuthMiddleware,taskController.taskShow);
















module.exports = router;