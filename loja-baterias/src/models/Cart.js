const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");
const { default: Product } = require("./Product");
const { default: User } = require("./User");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { sequelize }
);

module.exports = Cart;
