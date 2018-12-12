import React, { Component } from 'react';
import FunctionComp from './funcComp'
import FormComp from './FormComp'
import Checkout from './Checkout';


class Home extends Component {
    state = {  }
    render() { 
        return (  
            <div>
            <h2>hi this is home </h2>
            <p>Name: {this.props.name}</p>
            <button onClick = {this.props.eventByChild}>Click Here </button>
            <Welcome/>
            <br/>

            <FormComp/>
            </div>
        );
    }
}

// const FunctionComp = () =>{
//     return (<div>
//     <p> this is a Functional Component</p>
//     </div>)
// }
 
function Welcome(props) {
    return <h1>Hello, gfdgfd</h1>;
  }
export default Home;