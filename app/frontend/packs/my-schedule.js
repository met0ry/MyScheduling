import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import CalendarContainer from './calendar/containers/calendar-container'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <CalendarContainer />
  </ApolloProvider>,
  document.getElementById('my_schedule_container')
);