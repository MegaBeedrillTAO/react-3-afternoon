import React from 'react';
import './App.css';

import DisplayWindow from "./mystuff/DisplayWindow";
import NavButtons from "./mystuff/NavButtons";



class App extends React.Component {
  constructor(){
    super();
    this.state ={
        arrayNum: 0,
        indexNum: 1
    }
}
  buttonClickPlus = () =>{
    this.setState({arrayNum: this.state.arrayNum + 1, indexNum: this.state.indexNum + 1})
  }
  buttonClickMinus = () =>{
    this.setState({arrayNum: this.state.arrayNum - 1, indexNum: this.state.indexNum - 1})
  }
  render(){
  return (
    <div className="App">
      <header className="appHead">
        <h3>Home</h3>
      </header>
      <main className="appMain">
        <DisplayWindow arrayNum={this.state.arrayNum} indexNum={this.state.indexNum}/>
      </main>
      <NavButtons buttonClickPlus={this.buttonClickPlus} buttonClickMinus={this.buttonClickMinus}/>
    </div>
  );
  }
}

export default App;
