const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

class Purchase extends Model {}

Purchase.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { sequelize }
);

module.exports = Purchase;
