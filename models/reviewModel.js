const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static associate(models) {
      Review.belongsTo(models.Product, {
        onDelete: 'CASCADE',
        foreignKey: 'product_id',
        as: 'Product',
      });
    }
  }
  Review.init(
    {
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    },
  );
  return Review;
};
