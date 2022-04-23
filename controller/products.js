const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/Product");

const getAllProductsStatic = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, length: products.length });
});

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ products, length: products.length });
});

module.exports = { getAllProductsStatic, getAllProducts };
