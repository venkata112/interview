import React, { Component } from 'react';

class UnControlledCmp extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    console.log({title : this.name.value, age:this.age.value})
    
    }

    render() { 
        return ( 
            <div>
                <h2> this is Uncontrolled Component </h2>
                <form onSubmit={this.handleSubmit}>
                <input  ref = {input =>this.name= input}   />
                <input  ref = {input =>this.age= input}   />

                <input  type = "submit" value="submit" />
                </form>
            </div>
         );
    }
}
 
export default UnControlledCmp;
// <input type="text" value={this.state.own} name= "own"  />
