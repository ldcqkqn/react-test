import React, { Component } from 'react';
import TOC from "./componants/TOC";
import Content from "./componants/Content";
import Subject from "./componants/Subject";
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'read',
      subject : {title : "REACT", sub : "CHEER UP"},
      welcome : {title : 'Welcome', add : 'good'},
      contents:[
        {id: 1, title: 'naver', add: 'https://www.naver.com' },
        {id: 2, title: 'adventurer', add: 'https://www.adventurer.co.kr' },
        {id: 3, title: 'daum', add: 'https://www.hanmail.net' }
      ]
    }
  }
  render(){
    console.log('app_rander');
    var _title, _add = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _add = this.state.welcome.add;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _add = this.state.contents[0].add;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} ldc={_add}></Content>
      </div>
    );
  }
}

export default App;


