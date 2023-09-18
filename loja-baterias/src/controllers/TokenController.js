const jwt = require("jsonwebtoken");

const secretKey = "testeSegredo";

const sign = (id, email) => {
  const token = jwt.sign({ userId: id, email: email }, secretKey, {
    expiresIn: "1h",
  });
  localStorage.setItem("token", token);
  return token;
};

const verify = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ Error: "Token não fornecido" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }

    req.body.user = decoded; // Adiciona os dados do usuário decodificados à solicitação
    next();
  });
};

module.exports = { sign, verify };
