module.exports = {
  type: 'object',
  description: 'Obtener un usuario por id.',
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', description: 'Id de Usuario' },
    },
  },
  response: {
    200: {
      type: 'object',
      description: 'Usuario con id',
      properties: {
        emailAddress: {
          type: 'string',
          description: 'Correo electrónico',
        },
        id: {
          type: 'string',
          description: 'ID de Usuario',
        },
      },
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
};
