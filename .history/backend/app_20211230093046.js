const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./utils/ErrorHandler");
// const fileUpload = require("express-fileupload");
const path = require("path");
app.use(express.json());

//!router import
const product = require("./Routes/productRoute");
app.use("/api/v1", product);
//!Middleware for error
app.use(ErrorHandler);
module.exports = app;
