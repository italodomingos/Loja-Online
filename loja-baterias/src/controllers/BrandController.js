const Brand = require("../models/Brand");
const setRangeHeader = require("../util/util");

async function listBrands(req, res) {
  try {
    const brand = await Brand.findAll();
    if (req.headers.range) {
      res = setRangeHeader(req, res, brand);
    }
    res.json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar marcas" });
  }
}

async function getBrand(req, res) {
  try {
    const brand = await Brand.findByPk(req.params.id);
    res.json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar marca" });
  }
}

async function createBrand(req, res) {
  try {
    const brand = await Brand.create(req.body);
    res.json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar marca" });
  }
}

async function updateBrand(req, res) {
  try {
    const brand = await Brand.findByPk(req.params.id);
    await brand.update(req.body);
    res.json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar marca" });
  }
}

async function deleteBrand(req, res) {
  try {
    await Brand.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Marca removida com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar Marca" });
  }
}

module.exports = {
  listBrands,
  getBrand,
  createBrand,
  deleteBrand,
  updateBrand,
};
