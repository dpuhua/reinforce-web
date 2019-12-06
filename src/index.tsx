import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo' // dom
import { ApolloClient } from 'apollo-client' // client
import { HttpLink } from 'apollo-link-http' // http service
import { InMemoryCache } from 'apollo-cache-inmemory' // cache

const graphQLServerLink = new HttpLink({ uri: 'http://localhost:8888/graphql' })

const client = new ApolloClient({
  link: graphQLServerLink,
  cache: new InMemoryCache()
})

// bind react components with graphql
const graphQLApp = 
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

ReactDOM.render(graphQLApp, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
