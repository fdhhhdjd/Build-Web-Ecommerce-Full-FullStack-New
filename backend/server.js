const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "backend/configs/.env" });
const connectDB = require("./configs/db");
connectDB();
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tai heo Fa" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is listening on port:http://localhost:${PORT}`)
);
