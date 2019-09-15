import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'tachyons';
import './index.css';
import Calendar from './components/Calendar';

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/ck0k2p72i0d750102p3hqsxyy',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/calendar" component={Calendar} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
