const Boom = require('@hapi/boom');

// Importamos el modelo de Usuario
const User = require('../../models/user');

module.exports = async ({ params: { id } }, reply) => {
  const userRecord = await User.findById(id);

  if (!userRecord)
    return Boom.notFound(
      `El usuario con id: ${id} no se encuentra en la base de datos`,
    );

  return reply.status(200).send(userRecord);
};
