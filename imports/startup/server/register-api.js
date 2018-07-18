import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from "lodash/merge";

import TesteSchema from '../../api/teste/Teste.graphql';
import TesteResolvers from '../../api/teste/resolvers';

//ha ha haa
const typeDefs = [TesteSchema];

const resolvers = merge(TesteResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });