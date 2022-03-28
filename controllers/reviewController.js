const db = require("../models");

const Review = db.Review;

//add Review
const addReview = async (req, res) => {
  let data = {
    rating: req.body.rating,
    description: req.body.description,
  };

  const review = await Review.create(data);
  res.status(200).send(review);
};

//2.get all reviews

const getAllReviews = async (req, res) => {
  let reviews = await Review.findAll({});
  res.status(200).send(reviews);
};

//3. get one review
const getOneReview = async (req, res) => {
  const review = Review.findOne({ where: { id: id } });
  res.status(200).send(review);
};

module.exports = {
  addReview,
  getAllReviews,
  getOneReview
}
