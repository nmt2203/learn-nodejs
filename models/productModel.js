const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      Product.hasMany(models.Review, {
        foreignKey: 'product_id',
        as: 'Review',
        onDelete: 'CASCADE',
      });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      published: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
