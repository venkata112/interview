import React, { Component } from 'react';
import axios from 'axios';

class AxiosDelCmp extends Component {
    state = { 
        id:0
     }

     handleChange = (event) => {
        this.setState({id:event.target.value})
     }

     handleSubmit = (event) =>{
         event.preventDefault();

      

         axios.delete(`http://jsonplaceholder.typicode.com/users/${this.state.id}`)
         .then( (res) =>{
             console.log(res)
             console.log(res.data)

         })
         
     }
    


    render() { 
        return ( 
            <div>
                Axios Post  Comp....
               <form onSubmit ={this.handleSubmit}>
                <label>
                    Person ID:
                    <input type= 'number' name = 'id' onChange = {this.handleChange} />
                </label>
                <button type = "submit">Delete</button>
               </form>
            </div>
         );
    }
}
 
export default AxiosDelCmp;