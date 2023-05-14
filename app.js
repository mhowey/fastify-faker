const fastify = require('fastify')({
  logger: true
})
fastify.register(require('./api/airlineRoutes.js'));
fastify.register(require('./api/peopleRoutes.js'));

fastify.listen({port: 3000, error: (error) => fastify.log.error(error)});