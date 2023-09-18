const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

class ProductRating extends Model {}

ProductRating.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { sequelize }
);

module.exports = ProductRating;
