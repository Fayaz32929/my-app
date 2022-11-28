import React, { Component } from 'react';

class Counter extends Component {
 
    render() {
        const {id:counterId}=this.props.counter
        return (
            <div>
            <span className={this.getBadgeClasses()} >{this.formetCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm' >Increment</button>
            <button className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(counterId)}>Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formetCount(){
        const {value} = this.props.counter
        return value === 0 ? "zero" : value
    }
}

export default Counter;