import React, { Component } from 'react';
const child = 'harsha..........'

class Child extends Component {
    constructor(){
        super()
        this.state = {
            addr:'Nellore',
            data:[],
            ss:''
        }
        this.formHandle = this.formHandle.bind(this)
    }

    handleFn = () =>{
        console.log('before setstate',this.state.addr)
        // this.props.fnFromParent(this.state.addr)
        this.setState({
            addr:'banglore'
        })
      
    }
    handleFn1 = () =>{
        console.log('After setstate',this.state.addr)

    }

    formHandle(e){
    e.preventDefault();

        this.setState({addr:e.target[0].value, data:e.target})
        console.log(e.target[0])

    }
    
   
    render() { 
        
        return ( 
            <div>
            child static data : {child}
           
            <button onClick = {this.handleFn}>Child Click</button><br/>
            <button onClick = {this.handleFn1}>After child Click</button><br/>

            <br/>
            <br/>
            ADDR :{this.state.addr}
            <div>
                <form onSubmit={this.formHandle}>
                    <input type="text"  />
                    <input type="text"  />

                    <input type="submit" value="Submit" />
                </form>
           uuuuuuuuuuuuuuuuuuu: {0&&"ramana"}
            </div>

            </div>

         );
    }
}
 
export default Child;