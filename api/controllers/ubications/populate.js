// Importamos el modelo de Ubicacion
const Ubication = require('../../models/ubication');
const faker = require('faker');

module.exports = async ({ body }, reply) => {
  let ubications = [];

  for (let i = 0; i < 10; i++) {
    const newUbication = new Ubication({
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
    });

    const ubicationSaved = await newUbication.save();
    ubications.push(newUbication);
    console.log(faker.address.latitude());
  }

  return reply.status(201).send(ubications);
};
