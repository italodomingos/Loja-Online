const ProductType = require("../models/ProductType");
const setRangeHeader = require("../util/util");

async function listProductTypes(req, res) {
  try {
    const productTypes = await ProductType.findAll();
    if (req.headers.range) {
      res = setRangeHeader(req, res, productTypes);
    }

    res.json(productTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar os tipos de usuário" });
  }
}

async function getProductType(req, res) {
  try {
    const productType = await ProductType.findByPk(req.params.id);
    res.json(productType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao busca tipo de usuário" });
  }
}

async function createProductType(req, res) {
  try {
    const productType = await ProductType.create(req.body);
    res.json(productType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar tipo de usuário" });
  }
}

async function updateProductType(req, res) {
  try {
    const productType = await ProductType.findByPk(req.params.id);
    await productType.update(req.body);
    res.json(productType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar tipo de usuário" });
  }
}

async function deleteProductType(req, res) {
  try {
    await ProductType.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Tipo de usuário removido com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar tipo de usuário" });
  }
}

module.exports = {
  listProductTypes,
  getProductType,
  createProductType,
  deleteProductType,
  updateProductType,
};
