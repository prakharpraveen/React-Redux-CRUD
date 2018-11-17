import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MainComponent from './home/MainComponent'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
