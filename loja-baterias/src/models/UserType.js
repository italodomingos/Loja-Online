const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

class UserType extends Model {}

UserType.init(
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
    permissions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  { sequelize, modelName: "UserType" }
);
// UserType.sync();

// const obj = {
//   description: "Admin",
//   permissions: ["jose"],
// };

// const userType = new UserType(obj);
// userType.permissions = ["admin"];
// userType.save();

module.exports = UserType;
