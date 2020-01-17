module.exports = {
  type: 'object',
  description: 'Dar de alta usuario con correo electrónico y contraseña',
  body: {
    required: ['emailAddress', 'password', 'passwordConfirmation'],
    properties: {
      emailAddress: {
        type: 'string',
        description: 'Correo electrónico de usuario',
      },
      password: { type: 'string', description: 'Contraseña' },
      passwordConfirmation: {
        type: 'string',
        description: 'Confirmación de contraseña',
      },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        token: { type: 'string', description: 'Token para autenticación' },
      },
    },
  },
};
