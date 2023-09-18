const Brand = require("../models/Brand");
const Product = require("../models/Product");
const ProductType = require("../models/ProductType");
const setRangeHeader = require("../util/util");

async function listProducts(req, res) {
  try {
    const product = await Product.findAll({ include: [Brand, ProductType] });
    if (req.headers.range) {
      res = setRangeHeader(req, res, product);
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
}

async function getProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Brand, ProductType],
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar produto" });
  }
}

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
}

async function updateProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar produto" });
  }
}

async function deleteProduct(req, res) {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Produto removido com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar produto" });
  }
}

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
