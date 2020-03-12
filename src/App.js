import React, { Component } from 'react';
import TOC from "./componants/TOC";
import Content from "./componants/Content";
import Subject from "./componants/Subject";
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="study"></Subject>
        <Subject title="열심히말고" sub="잘하자"></Subject>
        <TOC></TOC>
        <Content title="마지노선" ldc="인복이 많군"></Content>
      </div>
    );
  }
}

export default App;


