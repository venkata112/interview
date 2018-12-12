import React, { Component } from 'react';
import SignIn from './SignIn';
import axios from 'axios';
// import AddressForm from './AddressForm';
import Checkout from './Checkout';
import Pricing from './Pricing'
class FormComp extends Component {
   constructor(){
       super()
       this.state = {
           addr:'nellore',
           data: '',
           serverports:[]
       }
       this.updateState = this.updateState.bind(this);
    //    this.handleSubmit = this.handleSubmit.bind(this);
   }

//    handleSubmit(event) {
//     event.preventDefault();
//     // this.setState({data: event.target[1].value});
//     // alert('A name was submitted: ' + event.target.value);
//     console.log(event.target[2].value)
//     console.log(event.target[1].value)
//     console.log(event.target[0].value)


//   }

    updateState(e) {
        this.setState({addr: e.target.value});
     }
     componentDidMount(){
        axios.get('http://api.plos.org/search?q=title:DNA')
        .then(response => {
          this.setState({ serverports: response.data.response.docs[0].abstract });
            console.log(response.data.response.docs[0].abstract)
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    render() { 
        return ( 
            <div>
            <p>this is api data {this.state.serverports}</p>
                 <h4>addr : {this.state.addr}</h4>
                 <h4>data : {this.state.data}</h4>
                <p> this is Form Component </p>
                <form onSubmit={this.handleSubmit}>                  
                    Name:
                    <input type="text"   value = {this.state.value} onChange={this.updateState}/><br/>
                   

                    <input type="submit" value="Submit" />
             </form>
            <SignIn/>
            <Checkout/>
                <Pricing/>
            </div>
         );
    }
}
 
export default FormComp;