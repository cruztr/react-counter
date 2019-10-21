import React from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {number : 1};
  }

  incrementNumber = () => {
    this.setState({number : this.state.number+1});
  }

  decrementNumber = () => {
    this.setState({number : this.state.number-1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Number/>
        </header>
      </div>
    );
  }
}

export default App;
