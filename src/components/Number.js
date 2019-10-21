import React from 'react';

class Number extends React.Component {
    constructor(){
        super();
        this.state = {number : 0};
    }

    incrementNumber = () => {
        this.setState({number : this.state.number+1});
    }
    
      decrementNumber = () => {
        this.setState({number : this.state.number-1});
    }

    render() {
      return(
        <div>
          <button onClick={this.incrementNumber}>
              +
          </button>    
          <button onClick={this.decrementNumber}>
              -
          </button>  
          <p>
              Number : {this.state.number}
          </p> 
        </div>
      );
    }
}

export default Number;