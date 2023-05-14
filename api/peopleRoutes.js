const { faker } = require('@faker-js/faker');

module.exports = function (fastify, options, done) {
  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  });

  fastify.get('/people/profiles/:count', (request, reply) => {
    const { count }  = request.params;
    let profiles = [];
    for(let i = 0; i < count; i++) {
      let profile = { 
        prefix: faker.person.prefix(),
        firstName: faker.person.firstName(), 
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(), 
        suffix: faker.person.suffix(),
        bio: faker.person.bio(),
        jobDescriptor: faker.person.jobDescriptor(),
        jobTitle: faker.person.jobTitle(),
        jobType: faker.person.jobType(),
        gender: faker.person.gender(),
        sex: faker.person.sex(),
        sexType: faker.person.sexType(),
        zodiacSign: faker.person.zodiacSign(),
      }
      profiles.push({ profile });
    }
    reply.send(profiles)
  });

  fastify.get('/random-animals/:count', (request, reply) => {
    const allAnimals = ['bear', 'bird', 'cat', 'cetacean', 'cow', 'crocodilia', 'dog', 'fish', 'horse', 'insect', 'lion', 'rabbit', 'rodent', 'snake'];
    const { count }  = request.params;
    let animals = [];
    for(let i = 0; i < count; i++) {
      let randomAnimal = allAnimals[Math.floor(Math.random()*allAnimals.length)];
      const animalType = randomAnimal;
      const animal = faker.animal[randomAnimal]();
      animals.push({ animalType, animal });
    }
    reply.send(animals)
  });

  fastify.get('/people/bio/:count', (request, reply) => {
    const { count }  = request.params;
    let bios = [];
    for(let i = 0; i < count; i++) {
      const bio = faker.person.bio();
      bios.push({ bio });
    }
    reply.send(bios)
  });


  done();
}