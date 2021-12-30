const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
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
//!Get User Detail Login Take account Login or Register
router.route("/me").get(isAuthenticatedUser, getUserDetails);
//!update password
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
//!upload Profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
//!Get All user and admin  --Admin
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
//!Get Detail user   ---admin
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;
