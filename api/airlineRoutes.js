const { faker } = require('@faker-js/faker');

module.exports = function (fastify, options, done) {
  
  fastify.get('/airline', (request, reply) => {
    reply.send({"/aircraftType": "String", "/airline": "String", "/airplane": "String", "/airport": "String", "/flightNumber": "Number", "/recordLocator": "String"});
  });

  fastify.get('/airline/airlines/:count', (request, reply) => {
    const { count }  = request.params;
    const airlines = [];
    for(let i = 0; i < count; i++) {
      const airline = faker.airline.airline();
      airlines.push({ airline });
    }
    reply.send(airlines)
  });

  fastify.get('/airline/airplanes/:count', (request, reply) => {
    const { count }  = request.params;
    const airplanes = [];
    for(let i = 0; i < count; i++) {
      const airplane = faker.airline.airplane();
      airplanes.push({ airplane });
    }
    reply.send(airplanes)
  });

  fastify.get('/airline/airports/:count', (request, reply) => {
    const { count }  = request.params;
    const airports = [];
    for(let i = 0; i < count; i++) {
      const airport = faker.airline.airport();
      airports.push({ airport });
    }
    reply.send(airports)
  });

  fastify.get('/airline/flightNumbers/:count', (request, reply) => {
    const { count }  = request.params;
    const flightNumbers = [];
    for(let i = 0; i < count; i++) {
      const flightNumber = faker.airline.flightNumber();
      flightNumbers.push({ flightNumber });
    }
    reply.send(flightNumbers)
  });

  fastify.get('/airline/recordLocator/:count', (request, reply) => {
    const { count }  = request.params;
    const records = [];
    for(let i = 0; i < count; i++) {
      const record = faker.airline.recordLocator();
      records.push({ record });
    }
    reply.send(records)
  });

  done();
}