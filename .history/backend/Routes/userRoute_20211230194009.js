const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
} = require("../Controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
//! Register User
router.route("/register").post(registerUser);
//! Login user
router.route("/login").post(loginUser);
//! logout user
router.route("/logout").get(logout);
//! Forgot password
router.route("/password/forgot").post(forgotPassword);

//! link reset password
router.route("/password/reset/:token").put(resetPassword);
//!Get User Detail
router.route("/me").get(isAuthenticatedUser, getUserDetails);
module.exports = router;
