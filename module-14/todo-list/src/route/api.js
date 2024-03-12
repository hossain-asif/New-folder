


const express = require('express');
const userController = require("../controller/userController");
const todoController = require("../controller/todoController");
const authMiddleware = require("../middleware/authMiddleware");



const router = express.Router();


//registration & login
router.post("/registration",userController.registration);
router.post("/login",userController.login);


//after login
router.get("/profileDetails",authMiddleware,userController.profileDetails);
router.post("/profileUpdate",authMiddleware,userController.profileUpdate);



//after login -> todo crud
router.post("/todo/create",authMiddleware,todoController.todoCreate);
router.post("/todo/update/:id",authMiddleware,todoController.todoUpdate);
router.get("/todo/delete/:id",authMiddleware,todoController.todoDelete);
router.get("/todo/read",authMiddleware,todoController.todoShow);