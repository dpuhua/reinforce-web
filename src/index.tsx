import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-components';
import { ApolloClient } from 'apollo-client' // client
import { HttpLink } from 'apollo-link-http' // http service
import { InMemoryCache } from 'apollo-cache-inmemory' // cache

import './index.css';
import App from './App';

const graphQLServerLink = new HttpLink({ uri: 'http://localhost:8888/graphql' })

const client = new ApolloClient({
  link: graphQLServerLink,
  cache: new InMemoryCache()
})

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));

