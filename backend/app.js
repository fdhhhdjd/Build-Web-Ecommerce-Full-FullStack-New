const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const path = require("path");
app.use(express.json());

//!router import
const product = require("./Routes/productRoute");
app.use("/api/v1", product);
module.exports = app;
