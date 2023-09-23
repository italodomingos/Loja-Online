const User = require("../models/User");
const UserType = require("../models/UserType");
const setRangeHeader = require("../util/util");
const CryptController = require("./CryptController");
const TokenController = require("./TokenController");
const { Op } = require("sequelize");

async function listUsers(req, res) {
  try {
    const users = await User.findAll({ include: UserType });
    if (req.headers.range) {
      res = setRangeHeader(req, res, users);
    }
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao buscar usuários" });
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id, { include: UserType });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao buscar usuário" });
  }
}

async function searchUser(req, res) {
  try {
    const users = await User.findAll({
      include: UserType,
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${req.body.text}%` } },
          { email: { [Op.like]: `%${req.body.text}%` } },
        ],
      },
    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao buscar usuário" });
  }
}

async function createUser(req, res) {
  try {
    await emailNotExist(req.body.email)
      .then(async () => {
        req.body.password = await CryptController.crypt(req.body.password);

        const user = await User.create(req.body, { include: UserType });
        // user.addUserType(userType);
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "Email já cadastrado" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao criar usuário" });
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id, { include: UserType });

    // const aux = {name: "anotni", password: "asdasd"}
    // delete aux.password

    await user.update(req.body);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao atualizar usuário" });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: { id: req.params.id },
    });
    if (user) {
      res.json({ message: "Usuário removido com sucesso!" });
    } else {
      res.json({ Error: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao deletar usuário" });
  }
}

function emailNotExist(email) {
  return new Promise((resolve, reject) => {
    User.findOne({ where: { email: email } }).then((response) => {
      if (response) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = User.findOne({ where: { email: email } });

    if (CryptController.isPasswordValid(password, user.password)) {
      TokenController.sign(user.id, user.email);
      res.json({ message: "Autenticado com sucesso!" });
    } else {
      res.status(401).json({ Error: "Credenciais inválidas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao fazer login" });
  }
}

async function logout(req, res) {
  try {
    localStorage.setItem("token", null);
    req.json({ message: "Token removido com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Erro ao fazer logout" });
  }
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  login,
  logout,
  searchUser,
};
