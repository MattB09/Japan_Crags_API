const { ApolloServer, gql } = require('apollo-server');
const knex = require('../db/knex');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

// Schema
const typeDefs = gql`

  type Prefecture {
    id: ID!
    name: String!
    crags: [Crag] 
  }

  type Style {
    id: ID!
    name: String!
    description: String 
    crags: [Crag] 
  }

  type Crag {
    id: ID!
    name: String!
    city: String!
    prefecture: Prefecture! 
    style: Style!
    description: String
  }

  type Query {
    crags: [Crag]
    prefectures: [Prefecture]
    styles: [Style]
  }
`;

const resolvers = {
    Query: {
      crags: async () => {
        const result = await knex.select('*').table('crags');
        return result;
      },
      prefectures: async () => {
        const result = await knex.select().table('prefectures');
        return result;
      },
      styles: async () => {
        const result = await knex.select().table('styles');
        return result;
      }
    },
    Prefecture: {
      crags: async (root) => {
        const result = await knex('crags').where({prefecture_id: root.id}).select('*')
        return result;
      }
    },
    Style: {
      crags: async (root) => {
        const result = await knex('crags').where({style_id: root.id}).select('*')
        return result;
      }
    },
    Crag: {
      prefecture: async (root) => {
        const result = await knex('prefectures').where({id: root.prefecture_id});
        return result[0];
      },
      style: async (root) => {
        const result = await knex('styles').where({id: root.style_id})
        return result[0];
      }
    }
  };

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});