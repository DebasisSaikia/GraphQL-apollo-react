const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Animal {
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
  }

  type Query {
    cards: [MainCard]
    animals: [Animal]
  }
`;

const cards = [
  {
    title: "card 1",
    image:
      " https://images.unsplash.com/photo-1621570169561-0c2a2e193ee1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "card 2",
    image:
      "https://images.unsplash.com/photo-1606312048616-f1325f4bea44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
];

const resolvers = {
  Query: {
    cards: () => cards,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
