module.exports = {
  type: 'object',
  description: 'Iniciar sesión con correo electrónico y password.',
  body: {
    required: ['emailAddress', 'password'],
    properties: {
      emailAddress: {
        type: 'string',
        description: 'Correo electrónico de usuario',
      },
      password: { type: 'string', description: 'Contranseña' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string', description: 'Token para autenticación' },
      },
    },
  },
};
