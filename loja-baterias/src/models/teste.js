const sequelize = require("../database/db");
const Product = require("./Product");

sequelize.sync({ force: true });
