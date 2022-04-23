const express = require("express");
const dotenv = require("dotenv");
const connectToDataBase = require("./db/connect");
const router = require("./routes/products");
// const Product = require("./models/Product");
const app = express();

dotenv.config({
  path: "./config/config.env",
});
// Mongoose
connectToDataBase();
// Body Middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});
app.use("/api/v1/products", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  return console.log("Server Started");
});

// const json = require("./products.json");
// const start = async () => {
//   await Product.create(json);
// };

// start();
