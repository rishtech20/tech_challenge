const { gql } = require("apollo-server-lambda");

const AWS = require("aws-sdk");

const S3 = new AWS.S3({
  accessKeyId: "xxx",
  secretAccessKey: "xxxx",
});

const typeDefs = gql`
  type Query {
    songs: [Song]!
  }

  type Song {
    song: String!
    artist: String!
    songReleaseDate: String!
    playCount: Int!
    metricA: Int
    metricB: Int
    metricC: Int
    metricD: Int
    metricE: Int
    metricF: Int
    metricG: Int
    metricH: Int
    metricI: Int
    metricJ: Int
    metricK: Int
    metricL: Int
    metricM: Int
    metricN: Int
    metricO: Int
    metricP: Int
  }
`;

const resolvers = {
  Query: {
    songs: async (_root, _args, _ctx) => {
      const params = {
        Bucket: "my-heart-media",
        Key: "songData.json",
      };
      const obj = await S3.getObject(params).promise();

      return JSON.parse(obj.Body.toString("utf-8"));
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
