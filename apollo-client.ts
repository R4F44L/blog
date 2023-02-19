// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mn3klmke.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

export default client;
