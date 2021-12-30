const Product = require("../Model/productModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
//!Create Product--Admin
exports.createProducts = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Create Product Successfully",
    product,
  });
});
//! Get all Product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    message: "Get All Products Successfully !",
    products,
  });
});
//! get Product Detail
exports.getProductsDetail = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  // if (!product) {
  //   return res.status(500).json({
  //     success: false,
  //     message: "Product not found !!!",
  //   });
  // }
  if (!product) {
    return next(new ErrorHandler("Product not found !!!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Get Products Detail Successfully !",
    product,
  });
});
//! Update Product --Admin
exports.updateProducts = catchAsyncErrors(async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found !!!", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: "Update Products Successfully !",
    product,
  });
});
//! Delete Product -- Admin
exports.DeleteProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found !!!", 404));
  }
  await product.remove();
  res.status(200).json({
    message: "Delete Products Successfully !",
    product,
  });
});
