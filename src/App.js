import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state는 자바스크립트 객체. special property
  state = {
    persons: [
      {name: 'Hannah', age: 22},
      {name: 'Kyeonghee', age: 50},
      {name: 'Sogeum', age: 3}
    ]
  }

  //handler라는 이름을 붙여주면 이벤트 핸들러로 따라오는 함수임을 알 수 있기 때문에 이렇게 짓는 것이 컨벤션
  switchNameHandler = () => {
    //console.log("Was clicked!");
    //DON'T: this.state.persons[0].name = "박현아";
    this.setState({})
  }

  render() {
    return (
     <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Her hobbies: shopping</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
     </div>
    );
  }
}

export default App;
