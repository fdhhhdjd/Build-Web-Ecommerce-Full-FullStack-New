const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");
// const fileUpload = require("express-fileupload");
const path = require("path");
app.use(express.json());

//!router import
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoute");

//!Link router Main
app.use("/api/v1", product);
app.use("/api/v1", user);
//!Middleware for error
app.use(ErrorHandler);
module.exports = app;
