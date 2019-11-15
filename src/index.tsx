import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {Provider} from "react-redux";
import configureStore from "./store"
import './index.css';
import App from './App';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});

const store = configureStore()
store.subscribe(() => {
    const globalState = store.getState();
    console.log(globalState);
});
ReactDOM.render(
    <Provider {...{store}}>
        <ApolloProvider {...{client}}>
            <App/>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root'),
);
