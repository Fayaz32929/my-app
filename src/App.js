import React, { Component } from 'react';

import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';



class App extends Component {
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
handleIncrement = (counter) =>{
    console.log(`hi ${counter} `)

    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    
    counters[index].value++
    this.setState({counters})
}
handleDecrement = (counter) =>{
    console.log(`hi ${counter} `)

    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value === 0 )return ;
    else
    counters[index].value--
    this.setState({counters});
}
handleReset = ()=>{
    const counters = this.state.counters.map((c)=>{
        c.value=0
        return c;})
        this.setState({counters})
}
  render() { 
    return (<React.Fragment>
      <NavBar totalCounter= {this.state.counters.filter((c)=> c.value > 0  ).length}/>
      <main className='container'> <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}/></main>
    </React.Fragment>);
  }
}
 
export default App;

