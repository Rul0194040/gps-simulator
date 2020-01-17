const Boom = require('@hapi/boom');
const Bcrypt = require('bcrypt');

// Importamos el modelo de Ubicacion
const Ubication = require('../../models/ubication');

module.exports = async ({ body, params: { id } }, reply) => {
  const ubicationUpdate = await Ubication.findById(id);

  if (ubicationUpdate) {
    ubicationUpdate.overwrite({
      lat: body.lat,
      long: body.long,
    });
    await ubicationUpdate.save();

    return reply.status(201).send(ubicationUpdate);
  }
  return Boom.badRequest('El usuario no existe en la base de datos');
};
