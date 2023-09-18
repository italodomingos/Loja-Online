const bcrypt = require("bcrypt");

const crypt = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};

const isPasswordValid = (enteredPassword, storedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(enteredPassword, storedPassword, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

module.exports = { crypt, isPasswordValid };
