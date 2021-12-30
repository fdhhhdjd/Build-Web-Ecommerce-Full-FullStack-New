const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../Controllers/userController");

const router = express.Router();
//! Register User
router.route("/register").post(registerUser);
//! Login user
router.route("/login").post(loginUser);
//! logout user
router.route("/logout").post(logout);
module.exports = router;
