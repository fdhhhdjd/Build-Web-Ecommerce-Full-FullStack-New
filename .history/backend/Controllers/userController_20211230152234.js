const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../Model/userModel");
const crypto = require("crypto");
const sendToken = require("../utils/jwtToken");
//!Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is id Image",
      url: "https://tophinhanhdep.com/wp-content/uploads/2021/03/tai-anh-gai-xinh-de-thuong.jpg",
    },
  });
  //   const token = user.getJWTToken();
  //   res.status(201).json({
  //     success: true,
  //     message: "Register Successfully Thank you !",
  //     user,
  //     token,
  //   });
  sendToken(user, 201, "oke lam", res);
});
//!Login a User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const message = "login success";
  sendToken(user, 200, res, message);
});
