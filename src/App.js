import React, { Component } from 'react';
import './App.css';
import Searchbar from './containers/searchbar';
import ExChart from './chart'

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ExChart />
      </div>
    );
  }
}

export default App;
