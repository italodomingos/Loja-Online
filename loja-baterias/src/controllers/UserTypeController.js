const UserType = require("../models/UserType");
const setRangeHeader = require("../util/util");

async function listUserTypes(req, res) {
  try {
    const userTypes = await UserType.findAll();
    if (req.headers.range) {
      res = setRangeHeader(req, res, userTypes);
    }

    res.json(userTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar os tipos de usuário" });
  }
}

async function getUserType(req, res) {
  try {
    const userType = await UserType.findByPk(req.params.id);
    res.json(userType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao busca tipo de usuário" });
  }
}

async function createUserType(req, res) {
  try {
    const userType = await UserType.create(req.body);
    res.json(userType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar tipo de usuário" });
  }
}

async function updateUserType(req, res) {
  try {
    const userType = await UserType.findByPk(req.params.id);
    await userType.update(req.body);
    res.json(userType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar tipo de usuário" });
  }
}

async function deleteUserType(req, res) {
  try {
    await UserType.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Tipo de usuário removido com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar tipo de usuário" });
  }
}

module.exports = {
  listUserTypes,
  getUserType,
  createUserType,
  deleteUserType,
  updateUserType,
};
