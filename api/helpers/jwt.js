const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

module.exports = {
  sign: (payload, expiresIn = process.env.JWT_EXPIRES_IN) =>
    jwt.sign(payload, process.env.API_KEY, { expiresIn }),
  verify: (token, apiKey) => jwt.verify(token, apiKey),
  decode: (token) => jwt.decode(token),
};
