import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
 
render() {  
    const {onReset , counters, onIncrement,onDecrement, onDelete} =  this.props
        return (<div>
            <button onClick={()=>onReset()} 
            className="btn btn-primary">Reset</button>
            {counters.map(counter=>
            <Counter key={counter.id} 
            onIncrement={onIncrement} 
             onDelete={onDelete}
             onDecrement={onDecrement} 
             counter={counter} />)}
                </div>);
    }
}
 
export default Counters ;