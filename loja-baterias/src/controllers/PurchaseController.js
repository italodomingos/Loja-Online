const Product = require("../models/Product");
const Purchase = require("../models/Purchase");
const User = require("../models/User");
const setRangeHeader = require("../util/util");

async function listPurchases(req, res) {
  try {
    const purchase = await Purchase.findAll({ include: [User, Product] });
    if (req.headers.range) {
      res = setRangeHeader(req, res, purchase);
    }
    res.json(purchase);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar compras" });
  }
}

async function getPurchase(req, res) {
  try {
    const purchase = await Purchase.findByPk(req.params.id, {
      include: [User, Product],
    });

    res.json(purchase);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar compra" });
  }
}

async function createPurchase(req, res) {
  try {
    const purchase = await Purchase.create(
      { UserId: req.body.UserId },
      { include: [User, Product] }
    );
    for (const product of req.body.Products) {
      const productDB = await Product.findByPk(product.id);
      await purchase.addProduct(productDB, {
        through: { quantity: product.quantity },
      });
    }

    res.json(purchase);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar compra" });
  }
}

// async function updatePurchase(req, res) {
//   try {
//     const purchase = await Purchase.findByPk(req.params.id);
//     await purchase.update(req.body);
//     res.json(purchase);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Erro ao atualizar compra" });
//   }
// }

async function deletePurchase(req, res) {
  try {
    await Purchase.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Compra removida com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar compra" });
  }
}

module.exports = { listPurchases, getPurchase, createPurchase, deletePurchase };
