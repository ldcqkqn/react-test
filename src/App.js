import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return(
      <header>
        <h1>DongChan</h1>
        컴포넌트 만들기 1 
      </header>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}

export default App;


