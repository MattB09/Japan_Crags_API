const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
// const cors = require('cors');


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  cors: {
    origin: 'http://localhost:3000',
    credentials: true // <-- REQUIRED backend setting
  }
});

const PORT = 4000

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});