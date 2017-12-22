import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './containers/searchbar';


class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

export default App;
