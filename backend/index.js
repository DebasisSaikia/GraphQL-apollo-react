const { ApolloServer, gql } = require("apollo-server");

const { cards, animals, categories } = require("./db");

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Animal {
    id: ID!
    slug: String!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
  }

  type Query {
    cards: [MainCard]
    animals: [Animal!]! #adding '!'will trigger the error or else will show null for the blank values
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
`;

const resolvers = {
  Query: {
    cards: () => cards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      let animal = animals.find((animal) => {
        return animal.slug === args.slug;
      });
      return animal;
    },
    categories: () => categories,
    category: (parents, args, ctx) => {
      let category = categories.find((category) => {
        return category.slug === args.slug;
      });
      return category;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
