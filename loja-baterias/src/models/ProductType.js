const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

class ProductType extends Model {}

ProductType.init(
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
  },
  { sequelize }
);

module.exports = ProductType;
