const ErrorHander = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../Model/userModel");
const crypto = require("crypto");
//!Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {});
