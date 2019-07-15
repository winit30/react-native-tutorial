import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/es/integration/react';
import { PersistGate } from 'redux-persist/integration/react'

import persist from "./src/config/store";
const persistStore = persist();

import Main from "./src/Main";

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
