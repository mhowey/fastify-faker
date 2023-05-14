const fastify = require('fastify')({
  logger: true
})
const port = process.env.PORT || 3000;
fastify.register(require('./api/airlineRoutes.js'));
fastify.register(require('./api/peopleRoutes.js'));

fastify.listen({port: port, error: (error) => fastify.log.error(error)});