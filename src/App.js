import React, { Component } from 'react';
import TOC from "./componants/TOC";
import Content from "./componants/Content";
import Subject from "./componants/Subject";
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject : {title : "REACT", sub : "CHEER UP"},
      contents:[
        {id: 1, title: 'naver', add: 'https://www.naver.com' },
        {id: 2, title: 'adventurer', add: 'https://www.adventurer.co.kr' },
        {id: 3, title: 'daum', add: 'https://www.hanmail.net' }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="열심히말고" sub="잘하자"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="마지노선" ldc="인복이 많군"></Content>
      </div>
    );
  }
}

export default App;


