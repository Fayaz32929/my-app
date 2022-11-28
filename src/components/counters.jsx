import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { counters:[
        {id : 1 , value : 1},
        {id : 2 , value : 0},
        {id : 3 , value : 0},
        {id : 4 , value : 0}
    ] } 
handleDelete = (counterid) =>{
const counters = this.state.counters.filter(f=> f.id !== counterid) 
this.setState({counters})
    console.log("delete clicked")
}

render() { 
        return (<div>
            {this.state.counters.map(counter=><Counter key={counter.id}  onDelete={this.handleDelete} counter={counter} />)}
                </div>);
    }
}
 
export default Counters ;