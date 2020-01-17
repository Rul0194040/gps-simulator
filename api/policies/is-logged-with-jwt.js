const Boom = require('@hapi/boom');

const jwt = require('../helpers/jwt');

module.exports = ({ headers }, reply, done) => {
  const apiKey = headers['x-api-key'];
  const token = headers.authorization.split(' ')[1];

  if (!apiKey) return Boom.unauthorized('No estás autorizado');

  if (!token) return Boom.forbidden('El token es inválido');

  try {
    const decodedUser = jwt.verify(token, apiKey);
    done();
  } catch (error) {
    return Boom.forbidden(error);
  }
};
