const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  deleteOrder,
  updateOrder,
} = require("../Controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
//!Create order
router.route("/order/new").post(isAuthenticatedUser, newOrder);
//!Get SingleOrder
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
//!Get all Account have Login Other
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
//!Get all Order,totalAmount   ---admin
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
//!Upload status,delete Order,totalAmount   ---admin
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);
module.exports = router;
