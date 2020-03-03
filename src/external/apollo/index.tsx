import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError, ErrorResponse } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { API_URL } from '../../config';
import firebase from '../firebase';

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      // eslint-disable-next-line no-console
      console.warn(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    // eslint-disable-next-line no-console
    console.warn(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: API_URL,
});

const authMiddleware = setContext(async (req, { headers }) => {
  if (firebase.auth().currentUser) {
    const token = await firebase!.auth()!.currentUser!.getIdToken(true);
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {
    headers,
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
