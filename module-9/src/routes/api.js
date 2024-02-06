
const express = require('express');
const studentControllers = require("../controllers/studentControllers");

const router = express.Router();

router.get("/read",studentControllers.ReadStudent);

router.post("/create",studentControllers.CreateStudent);

router.put("/update",studentControllers.UpdateStudent);

router.delete("/delete",studentControllers.DeleteStudent);


module.exports = router;