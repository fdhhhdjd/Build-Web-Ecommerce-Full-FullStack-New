const ErrorHander = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../Model/userModel");
// const crypto = require("crypto");
//!Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await new User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is id Image",
      url: "https://tophinhanhdep.com/wp-content/uploads/2021/03/tai-anh-gai-xinh-de-thuong.jpg",
    },
  });
  res.status(201).json({
    success: true,
    message: "Register Successfully Thank you !",
    user,
  });
});
