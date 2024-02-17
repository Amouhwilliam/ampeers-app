const data = require('./data');

const resolvers = {
    Query: {
        readContract: (_, { contractId }) => data["100"].find(contract => contract.id === contractId) || null,
        readContractComponent: (_, { contractComponentId }) => data["100"].contractMeter.contractComponents.find(component => component.id === contractComponentId) || null
    }
};

module.exports = resolvers;