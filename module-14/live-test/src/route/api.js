const express = require('express');
const productController = require("../controller/productController");

const router = express.Router();


router.post("/product/create",productController.productCreate);
router.post("/product/update/:id",productController.productUpdate);
router.get("/product/delete/:id",productController.productDelete);
router.get("/product/read",productController.productRead);



module.exports = router;