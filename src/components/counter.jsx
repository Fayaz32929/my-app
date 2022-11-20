import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
      } 
      handleChange = () =>{
          this.setState({ count: this.state.count + 1})
      }
    render() {
        return (
            <div>
            <span className={this.getBadgeClasses()} >{this.formetCount()}</span>
            <button onClick={this.handleChange} className='btn btn-secondary btn-sm' >Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formetCount(){
        const {count} = this.state
        return count === 0 ? "zero" : count
    }
}

export default Counter;