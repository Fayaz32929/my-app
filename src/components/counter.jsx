import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0
      } 
      styles = {
        fontSize:50
      }
    render() { 
        return (
            <React.Fragment>
            <span className='badge badge-primary m-2 ' >{this.formetCount()}</span>
            <button className='btn btn-secondary btn-sm' >Increment</button>
            </React.Fragment>
        );
    }
    formetCount(){
        const {count} = this.state
        return count === 0 ? "zero" : count
    }
}

export default Counter;