import React, { Component } from 'react';


class ControlledCmp extends Component {
    constructor(){
        super();
        this.state = {  
            title:'venkat',
            own:'ramana',
            data:''
        }
    }
  
    handleChange = (e) =>{
        e.preventDefault()
        var state = this.state;
        state[e.target.name] = e.target.value
        this.setState(
            state
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        // this.setState({data:this.state.title})
        // console.log(this.state.own)
        const {title:r, own:p}  = this.state;
        console.log(r, p)
    }
    render() { 
        return ( 
            <div>
                <h2>This is Controlled Component </h2>
                <p>Data : {this.state.data}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} name= "title" onChange={this.handleChange} />
                    <input type="text" value={this.state.own} name= "own" onChange={this.handleChange} />

                    <input type = "submit" value="submit" />
                </form>
            </div>
                 );
    }
}
 
export default ControlledCmp

