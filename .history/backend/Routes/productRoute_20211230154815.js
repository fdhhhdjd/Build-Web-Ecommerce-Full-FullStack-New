const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  DeleteProducts,
  getProductsDetail,
} = require("../Controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();
//! Get All Product
router.route("/products").get(getAllProducts);
//! Create product
router.route("/product/new").post(isAuthenticatedUser, createProducts);
//! Edit,Delete,Detail Product
router
  .route("/product/:id")
  .put(isAuthenticatedUser, updateProducts)
  .delete(isAuthenticatedUser, DeleteProducts)
  .get(getProductsDetail);

module.exports = router;
