// Importamos el modelo de Ubicacion
const Ubication = require('../../models/ubication');

module.exports = async (_, reply) => {
  const ubications = await Ubication.find();

  return reply.status(201).send(ubications);
};
