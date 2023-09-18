const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

class PurchaseItem extends Model {}

PurchaseItem.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = PurchaseItem;
