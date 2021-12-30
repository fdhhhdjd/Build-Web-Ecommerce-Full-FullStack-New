const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  DeleteProducts,
} = require("../Controllers/productController");
const router = express.Router();
//! Get All Product
router.route("/products").get(getAllProducts);
//! Create product
router.route("/product/new").post(createProducts);
//! Edit,Delete Product
router.route("/product/:id").put(updateProducts).delete(DeleteProducts);

module.exports = router;
