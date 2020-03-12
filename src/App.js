import React, { Component } from 'react';
import TOC from "./componants/TOC";
import Content from "./componants/Content";
import Subject from "./componants/Subject";
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;


