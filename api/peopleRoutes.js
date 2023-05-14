const { faker } = require('@faker-js/faker');

module.exports = function (fastify, options, done) {
  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  });

  fastify.get('/people/bio/:count', (request, reply) => {
    const { count }  = request.params;
    const bios = [];
    for(let i = 0; i < count; i++) {
      const bio = faker.person.bio();
      bios.push({ bio });
    }
    reply.send(bios)
  });

  done();
}