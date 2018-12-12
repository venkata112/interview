import React, { Component } from 'react';
import axios from 'axios';
class Axioscmp extends Component {
    
    constructor(){
        super();
        this.state = {
            messages:[]
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then((result) => {
            const messages = result.data
            console.log("COMPONENT WILL Mount messages :: ", messages[0].id);
            this.setState({ 
              messages: [ ...messages ] 
            })
      })
    }
    render() { 
        return (
            <div>
                <h2>This is Axios Component</h2>
              
                <table>                
                Axios Data: {this.state.messages.length <0 ? ' not got':this.state.messages
                .map( el => (<tr>
                    <td>{el.id} </td> <td> {el.title}</td> <td> {el.body}</td>  
                     </tr>)
                )}
                </table>
            </div>
          );
    }
}
 
// export default Axioscmp;


// class Axioscmp extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//     }
  
//     componentDidMount() {
//       axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, items } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//           <ul>
//             {items.map(item => (
//               <li key={item.name}>
//                 {item.name} {item.price}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//     }
//   }

export default Axioscmp;
