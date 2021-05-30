const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { cards, animals, categories } = require("./db");
const Query = require("./resolvers/Query");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Animal, Category },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
