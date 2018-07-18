import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { from } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Loadmang from '../../ui/helpers/Loadmang';

const App = Loadmang(() => import('../../ui/components/dashboard/App'));

const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl("graphql")
});
const cache = new InMemoryCache();
const client = new ApolloClient({
    link: from([httpLink]),
    cache
});

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

Meteor.startup(() => {
    render(<ApolloApp/>, document.getElementById('render-target'));
});