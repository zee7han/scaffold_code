import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FlightDisplay from './components/FlightDisplay';

class App extends React.Component {
  render(){

    return (
      <div id="main">
        <Header />
        <SearchBar />
        <FlightDisplay />
      </div>
    )
  }
}

export default App;
