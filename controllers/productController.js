const db = require("../models");

//create main Model
const Product = db.Product
const Review = db.Review

//main

//1.create product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

//2.get all product
const getAllProducts = async (req, res) => {
  let products = await Product.findAll();
  res.send(products);
};

//3.get single product
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.send(product);
};

//4.update product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

//5.get single product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.send("product is deleted");
};

//6.get published product
const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.send(products);
};

//7.connect one to many relation Product and Review
const getProductReviews = async (req, res) => {
  const { id } = req.params
  const data = await Product.findAll({
    include: [{
      model: Review,
      as: 'Review'
    }],
    where: { id: id }
  })
  res.status(200).send(data)
}

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
  getProductReviews
};
