const Brand = require("./Brand");
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");
const Cart = require("./Cart");
const Purchase = require("./Purchase");
const User = require("./User");
const UserType = require("./UserType");
const CartItems = require("./CartItem");
const PurchaseItems = require("./PurchaseItem");
const Rating = require("./Rating");
const ProductType = require("./ProductType");
const ProductRating = require("./ProductRating");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ampers: {
      type: DataTypes.INTEGER,
    },
    warranty: {
      type: DataTypes.INTEGER,
    },
    terminalType: {
      type: DataTypes.CHAR,
    },
    boxSize: {
      type: DataTypes.STRING,
    },
  },
  { sequelize }
);

//Cart
Cart.belongsTo(User, { constraints: true });
Cart.belongsToMany(Product, {
  constraints: true,
  through: { model: CartItems },
});

//Purchase
Purchase.belongsTo(User, { constraints: true });
Purchase.belongsToMany(Product, {
  constraints: true,
  through: { model: PurchaseItems },
});

//Product
Product.belongsToMany(Purchase, {
  constraints: true,
  through: { model: PurchaseItems },
});
Product.belongsToMany(Rating, {
  constraints: true,
  through: ProductRating,
});
Product.belongsTo(ProductType, { constraints: true });
Product.belongsTo(Brand, { constraints: true });

//Rating
Rating.belongsTo(User, { constraints: true });

//User
User.belongsTo(UserType, { constraints: true });

module.exports = Product;
