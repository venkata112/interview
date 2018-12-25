import React, { Component } from 'react';
class HOC extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <ExtendedButton />
            <ExtendedLabel />
            </div>
         );
    }
}
let BaseCount = (BasicComponent) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        text: "Hello"
      }
      this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
      this.setState({
        count: this.state.count + 1
      })
    }
    render() {
      return (
        <div className="container">
          <BasicComponent {...this.state} increment={this.incrementCount}/>
        </div>
      )
    }
  }
  const Button = (props) => {
    console.log(props)
    return (
      <button className="btn blue-btn" onClick={props.increment}>Count: {props.count}</button>
    )
  }
  const Label = (props) => {
    return (
      <label onMouseMove={props.increment}>CountLabel: {props.count} </label>
    )
  }
  let ExtendedButton = BaseCount(Button);
  let ExtendedLabel = BaseCount(Label);

 
export default HOC;