const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

exports.options = {
  routePrefix: '/explorer',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Hoy Pasa API',
      description: 'Documentación para API REST de Hoy Pasa',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Encuentra más información aquí',
    },
    host: process.env.HOST,
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
      },
      bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
};
