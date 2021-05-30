const { gql } = require("apollo-server");

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
    category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    cards: [MainCard]
    animals: [Animal!]! #adding '!'will trigger the error or else will show null for the blank values
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
  type Mutation {
    addData(
      slug: String!
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      stock: Int!
      onSale: Boolean
      category: String!
    ): Animal

    removeData(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
