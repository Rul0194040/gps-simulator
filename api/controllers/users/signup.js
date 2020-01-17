const Boom = require('@hapi/boom');
const Bcrypt = require('bcrypt');

const User = require('../../models/user');
const jwt = require('../../helpers/jwt');

module.exports = async ({ body }, reply) => {
  const { emailAddress, password, passwordConfirmation } = body;
  const userRecord = await User.findOne({ emailAddress });

  if (!userRecord) {
    if (password === passwordConfirmation) {
      const newUser = new User({
        emailAddress,
        password: Bcrypt.hashSync(password, 10),
      });
      const userSaved = await newUser.save();
      const token = jwt.sign({ emailAddress, id: userSaved.id });

      return reply.status(201).send({ token });
    }

    return Boom.badRequest('Las contraseñas no coinciden');
  }

  return Boom.badRequest('El usuario ya existe en la base de datos');
};
