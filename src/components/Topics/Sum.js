import React, { Component } from 'react'

export default class Sum extends Component {
    constructor(){
     super();
     this.state = {
         userInput1: '',
         userInput2:  '',
         inputSum: '',
     }
    }
    updateUserInput1 = (input) => {
        this.setState({userInput1: input})
    }
    updateUserInput2 = (input) => {
        this.setState({userInput2: input})
    }
    sumValues = (val1,val2) => {
      const inputSum = Number(val1) + Number(val2);
      this.setState({inputSum: inputSum})
    }
    render(){
        return(
           <div className= 'puzzleBox sumPB'>
           <h4>Sum</h4>
           <input type="number" className='inputLine' onChange={e => this.updateUserInput1(e.target.value)}></input>
           <input type="number" className='inputLine' onChange={e => this.updateUserInput2(e.target.value)}></input>
           <button className='confirmationButton' onClick={() => this.sumValues(this.state.userInput1,this.state.userInput2)}>Add</button>
           <span className='resultsBox'>Sum: {this.state.inputSum}</span>
           </div>
        )
    }
}
