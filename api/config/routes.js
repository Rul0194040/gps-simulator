// Todas las rutas tienen un prefijo /api/v1
// para acceder a ellas a cada url se le tiene
// que agregar ese prefijon

// Policies
const isLoggedWithJwt = require('../policies/is-logged-with-jwt');

// Controllers
const usersController = require('../controllers/users');

// Json Schemas
const usersSchema = require('../json-schemas/users/');

module.exports = (fastify, opts, done) => {
  fastify.route({
    method: 'POST',
    url: '/users/signup',
    schema: usersSchema.signup,
    handler: usersController.signup,
  });

  fastify.route({
    method: 'POST',
    url: '/users/login',
    schema: usersSchema.login,
    handler: usersController.login,
  });

  fastify.route({
    method: 'GET',
    url: '/users/:id',
    schema: usersSchema.getOne,
    preValidation: isLoggedWithJwt,
    handler: usersController.getOne,
  });

  done();
};
