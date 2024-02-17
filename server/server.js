const fastify = require('fastify')({ logger: true });
const { graphqlFastify, graphiqlFastify } = require('fastify-gql');
const schema = require('./schema.graphql');
const resolvers = require('./resolver');

fastify.register(graphqlFastify, {
    schema,
    resolvers,
    prefix: '/graphql'
});

fastify.register(graphiqlFastify, {
    endpointURL: '/graphql',
    prefix: '/graphiql'
});

const start = async () => {
    try {
        await fastify.listen(4000);
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();