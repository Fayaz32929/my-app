import React, { Component } from 'react';

class Counter extends Component {
 
    render() {
        const {id:counterId}=this.props.counter
        return ( <div><div className ="container">
  <div className ="row">
    <div className ="col-sm">
      <span className={this.getBadgeClasses()}>
        {this.formetCount()}</span>
    </div>
    <div className ="col-sm">
      <button onClick={()=>this.props.onIncrement(this.props.counter)} 
      className='btn btn-dark btn-sm' >Increment</button>
    </div>
    <div className ="col-sm">
        <button onClick={()=>this.props.onDecrement(this.props.counter)} 
        className={this.getDecrementButtonClasses()} >Decrement</button>
    </div>
     <div className ="col-sm">
      <button className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(counterId)}>Delete</button>
    </div>
  </div>
</div>
           
            
            
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    getDecrementButtonClasses(){
    let classes = "btn  btn-sm btn-";
classes += this.props.counter.value === 0 ? "secondary" : "dark";
return classes
    }
    formetCount(){
        const {value} = this.props.counter
        return value === 0 ? "zero" : value
    }
}

export default Counter;