const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
const cloudinary = require("cloudinary");
const fs = require("fs");
dotenv.config({ path: "backend/configs/.env" });
const connectDB = require("./configs/db");
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tai heo Fa" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is listening on port:http://localhost:${PORT}`)
);
