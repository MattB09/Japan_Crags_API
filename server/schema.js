const { gql } = require('apollo-server');

const typeDefs = gql`

  type Prefecture {
    id: ID!
    name: String!
    crags: [Crag] 
  }

  input PrefectureInput {
    id: Int
    name: String
  }

  type Style {
    id: ID!
    name: String!
    description: String 
    crags: [Crag] 
  }

  input StyleInput {
    id: Int
    name: String
    description: String
  }

  type Crag {
    id: ID!
    name: String!
    city: String!
    prefecture: Prefecture! 
    style: Style!
    description: String
  }

  input CragInput {
    id: Int
    name: String!
    city: String!
    prefecture: PrefectureInput
    style: StyleInput
    description: String
  }

  type Query {
    crags: [Crag]
    crag(name: String, id: ID, city: String): Crag
    prefectures: [Prefecture]
    prefecture(id: ID, name: String): Prefecture
    styles: [Style]
    style(id: ID, name: String): Style
  }

  type Mutation {
    AddCrag(input: CragInput): Crag
    UpdateCrag(input: CragInput): Crag
    DeleteCrag(id: ID, name: String): Crag 
    AddPrefecture(input: PrefectureInput): Prefecture
    UpdatePrefecture(input: PrefectureInput): Prefecture
    DeletePrefecture(id: ID, name: String): Prefecture
    AddStyle(input: StyleInput): Style
    UpdateStyle(input: StyleInput): Style
    DeleteStyle(id: ID, name: String): Style
  }
`;

module.exports = typeDefs