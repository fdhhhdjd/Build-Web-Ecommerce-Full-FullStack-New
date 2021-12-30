const express = require("express");
const { registerUser, loginUser } = require("../Controllers/userController");

const router = express.Router();
//! Register User
router.route("/register").post(registerUser);
//! Login user
router.route("/login").post(loginUser);
module.exports = router;
