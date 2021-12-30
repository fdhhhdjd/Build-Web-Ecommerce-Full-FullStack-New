const Product = require("../Model/productModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
//!Create Product--Admin
exports.createProducts = catchAsyncErrors(async (req, res) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Create Product Successfully",
    product,
  });
});
//! Get all Product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPaginator = 5;
  const productCount = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPaginator);

  const products = await apiFeatures.query;
  let filteredProductsCount = products.length;
  res.status(200).json({
    success: true,
    message: "Get All Products Successfully !",
    products,
    productCount,
    filteredProductsCount,
  });
});
//! get Product Detail
exports.getProductsDetail = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
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
//! Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Thank you for watching again ",
  });
});
