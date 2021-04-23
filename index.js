const { ApolloServer, gql } = require('apollo-server');
const sessions = require('./data/sessions.json');


const typeDefs = gql`
type Query {
    sessions:[Session]
}
type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String
}`

const resolver = {
    Query: {
        sessions: ()
    }
};
const server = new ApolloServer({typeDefs});

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`graphQL running at ${url}`);
    })