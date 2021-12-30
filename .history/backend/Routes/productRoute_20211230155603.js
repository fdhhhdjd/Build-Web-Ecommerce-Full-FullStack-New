const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  DeleteProducts,
  getProductsDetail,
} = require("../Controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
//! Get All Product
router
  .route("/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllProducts);
//! Create product
router.route("/product/new").post(isAuthenticatedUser, createProducts);
//! Edit,Delete,Detail Product
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProducts)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), DeleteProducts)
  .get(getProductsDetail);

module.exports = router;
