import React, { Component } from 'react';
class ChildToParent extends Component {
    constructor(){
      super();
      this.state = {
                    name:'venkat',
                    count: 0,
      }
  
      this.handlePform = this.handlePform.bind(this)
    }
  
    handlePform(e){
      this.setState({name:e.target[0].value})
      e.preventDefault();
    }
    eventHandler = (fmchild) => {
      this.setState({name:fmchild, count:this.state.count+2})
    }
  
  
    render() {
      return (
        <div>
          hi ramana--------------------
          {console.log('hi venkat')}
  
          <p>Name : {this.state.name}</p>
          <p>Count : {this.state.count}</p>
  
          <br/>
          <br/>
          <form onSubmit={this.handlePform}>
            <input type="text"  />
            <input type="submit" value="Submit" />
              
          </form>
  
          <br/><br/><br/><br/>

        </div>
      );
    }
  }
  
  export default ChildToParent;












// class App extends React.Component {
//   constructor() {
//     super();
//     this.handleData = this.handleData.bind(this);
//     this.state = {
//       fromChild: ''
//     };
//   }
  
//   handleData(data) {
//     this.setState({
//       fromChild: data
//     });
//   }
  
//   render() {
//     return (
//       <div>
//         <InputFoo handlerFromParant={this.handleData} /> 
//         <h5>Received by parent:<br />{this.state.fromChild}</h5>
//       </div>
//     );
//   }
// }


// class InputFoo extends React.Component {
//   constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this);
//     this.submitHandler = this.submitHandler.bind(this);
//     this.state = {
//       inputField: ''
//     };
//   }
  
//   submitHandler(evt) {
//     evt.preventDefault();
//     // pass the input field value to the event handler passed
//     // as a prop by the parent (App)
//     this.props.handlerFromParant(this.state.inputField);
    
//     this.setState({
//       inputField: ''
//     });
//   }
  
//   handleChange(event) {
//     this.setState({
//       inputField: event.target.value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <input type="text" 
//                  id="theInput" 
//                  value={this.state.inputField} 
//                  onChange={this.handleChange} />
//           <input type="submit" />
//         </form>
//         <h5>Visible in child:<br />{this.state.inputField}</h5>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );