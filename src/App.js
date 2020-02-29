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

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href = 'https://www.naver.com'>Naver</a></li>
          <li><a href = 'https://www.adventurer.co.kr'>승부사 온라인</a></li>
          <li><a href = 'https://www.hanmail.net'>Daum</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>리액트세계에 온걸 환영한다.</h2>
        React is funny!!!!
      </article>
    );
  }
}

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


