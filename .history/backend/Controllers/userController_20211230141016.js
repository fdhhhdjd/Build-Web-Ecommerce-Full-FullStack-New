const ErrorHander = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../Model/userModel");
const crypto = require("crypto");
//!Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await new User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is id Image",
      url: "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=xnYWSqjvTl4AX_MIA3n&_nc_ht=scontent.fdad3-3.fna&oh=00_AT9voyGHhqXb6_U8TWcaaAplKMHHaONvqv_RnW0s4nZrpw&oe=61F16B9E",
    },
  });
});
