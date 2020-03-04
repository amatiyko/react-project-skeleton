import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import store from './external/redux';
import LocaleProvider from './containers/LocaleProvider';
import { Provider } from 'react-redux';
import { translationMessages } from './external/i18n';
import client from './external/apollo';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <LocaleProvider messages={translationMessages}>
        <App />
      </LocaleProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
