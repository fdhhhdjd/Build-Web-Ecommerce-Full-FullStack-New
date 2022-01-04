const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middleware/error");
const fileUpload = require("express-fileupload");
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//!router import
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoute");
const order = require("./Routes/orderRoute");

//!Link router Main
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//!Middleware for error
app.use(ErrorHandler);
module.exports = app;
