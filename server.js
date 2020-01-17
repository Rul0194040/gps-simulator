const fastify = require('fastify')({ logger: true });
const cors = require('fastify-cors');
const formbody = require('fastify-formbody');
const helmet = require('fastify-helmet');
const mongoose = require('mongoose');
const fastifySwagger = require('fastify-swagger');
const fastifyBoom = require('fastify-boom');

// Routes
const routes = require('./api/config/routes');

// Swagger
const swagger = require('./api/config/swagger');

// Connection with MongoDB
mongoose.connect('mongodb://localhost:27017/hoy-pasa-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', () =>
  console.log('Base de datos falló al conectarse'),
);

mongoose.connection.once('open', () => console.log('Base de datos conectada'));

// Middlewares
fastify.register(formbody);
fastify.register(helmet);
fastify.register(fastifySwagger, swagger.options);
fastify.register(fastifyBoom);

// Enable cors
fastify.register(cors, {
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
});

// Routes
fastify.register(routes, { prefix: '/api/v1' });

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
