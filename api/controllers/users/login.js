const Boom = require('@hapi/boom');
const Bcrypt = require('bcrypt');

const User = require('../../models/user');
const jwt = require('../../helpers/jwt');

module.exports = async ({ body }, reply) => {
  const { emailAddress, password } = body;
  const userRecord = await User.findOne({ emailAddress });

  if (!userRecord)
    return Boom.unauthorized('El password o email son incorrectos');

  if (Bcrypt.compareSync(password, userRecord.password)) {
    const token = jwt.sign({ emailAddress, id: userRecord.id });

    return reply.status(200).send({ token });
  }

  return Boom.unauthorized('El password o email son incorrectos');
};
