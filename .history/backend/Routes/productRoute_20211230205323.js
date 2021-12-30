const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  DeleteProducts,
  getProductsDetail,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../Controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
//! Get All Product
router
  .route("/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllProducts);
//! Create product
router.route("/product/new").post(isAuthenticatedUser, createProducts);
//! Edit,Delete Product
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProducts)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), DeleteProducts);
//! Detail Product
router.route("/product/:id").get(getProductsDetail);
//!Product Review
router.route("/review").put(isAuthenticatedUser, createProductReview);

//!Get all,Delete Product Review
router
  .route("/reviews")
  .get(getProductReviews)
  .put(EditReview)
  .delete(isAuthenticatedUser, deleteReview);
module.exports = router;
