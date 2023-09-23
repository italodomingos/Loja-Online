// routes/api.js
const express = require("express");
const router = express.Router();
const {
  listUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
  login,
  searchUser,
} = require("../controllers/UserController");
const {
  listUserTypes,
  getUserType,
  deleteUserType,
  createUserType,
  updateUserType,
} = require("../controllers/UserTypeController");
const {
  listBrands,
  getBrand,
  deleteBrand,
  createBrand,
  updateBrand,
} = require("../controllers/BrandController");
const {
  listProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} = require("../controllers/ProductController");
const {
  listPurchases,
  getPurchase,
  deletePurchase,
  createPurchase,
} = require("../controllers/PurchaseController");
const TokenController = require("../controllers/TokenController");
const {
  listProductTypes,
  getProductType,
  deleteProductType,
  createProductType,
  updateProductType,
} = require("../controllers/ProductTypeController");

// Users
router.get("/user", listUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.post("/user/login", login);
router.post("/user/search", searchUser);

//UserTypes
router.get("/userType", listUserTypes);
router.get("/userType/:id", getUserType);
router.delete("/userType/:id", deleteUserType);
router.post("/userType", createUserType);
router.put("/userType/:id", updateUserType);

//Brands
router.get("/brand", listBrands);
router.get("/brand/:id", getBrand);
router.delete("/brand/:id", deleteBrand);
router.post("/brand", createBrand);
router.put("/brand/:id", updateBrand);

//Products
router.get("/product", listProducts);
router.get("/product/:id", getProduct);
router.delete("/product/:id", deleteProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);

//ProductTypes
router.get("/productType", listProductTypes);
router.get("/productType/:id", getProductType);
router.delete("/productType/:id", deleteProductType);
router.post("/productType", createProductType);
router.put("/productType/:id", updateProductType);

//Purchase
router.get("/purchase", listPurchases);
router.get("/purchase/:id", getPurchase);
router.delete("/purchase/:id", deletePurchase);
router.post("/purchase", createPurchase);

//Token
router.get("/protected", TokenController.verify, (req, res) => {
  res.json({ message: "Rota protegida com sucesso", user: req.body.user });
});

module.exports = router;
