import React from 'react';
import './App.css';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppContainer />
      </div>
    </Provider>
  );
}

export default App;
