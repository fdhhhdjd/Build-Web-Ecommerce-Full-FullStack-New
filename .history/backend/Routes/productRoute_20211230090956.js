const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  DeleteProducts,
  getProductsDetail,
} = require("../Controllers/productController");
const router = express.Router();
//! Get All Product
router.route("/products").get(getAllProducts);
//! Create product
router.route("/product/new").post(createProducts);
//! Edit,Delete,Detail Product
router
  .route("/product/:id")
  .put(updateProducts)
  .delete(DeleteProducts)
  .get(getProductsDetail);

module.exports = router;
