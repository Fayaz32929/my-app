import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
      } 
      handleChange = () =>{
          this.setState({ value: this.state.value + 1})
      }
    render() {
        return (
            <div>
            <span className={this.getBadgeClasses()} >{this.formetCount()}</span>
            <button onClick={this.handleChange} className='btn btn-secondary btn-sm' >Increment</button>
            <button className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formetCount(){
        const {value} = this.state
        return value === 0 ? "zero" : value
    }
}

export default Counter;