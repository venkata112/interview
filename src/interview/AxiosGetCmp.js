import React, { Component } from 'react';
import axios from 'axios';
import './AxiosGetCmp.css'


class AxiosCmp extends Component {
    state = { 
        persons:[]
     }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
          .then((res) => {
            // const messages = result.data
            // console.log("COMPONENT WILL Mount messages :: ", messages[0].id);
            console.log('res.....',this.state.persons)
            this.setState({ 
                persons: res.data
            })
            console.log('res.....',this.state.persons)

      })
    }


    render() { 
        return ( 
            <div>
                Axios Get Comp....
                <ul>
                    {this.state.persons.map(person => <div key={person.id} ><li className="list"> hi :{person.name} </li></div>
                    )}
                </ul>
            </div>
         );
    }
}
 
export default AxiosCmp;