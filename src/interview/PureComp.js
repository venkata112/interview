import React, { Component, PureComponent } from 'react';
import Temp from './func' 
// const Temp = (props) => {
//   console.log('render Temp');
//   return (<div>{props.val}</div>)
// }


class PureComp extends PureComponent {
  state = {
    val: 1
  }

  componentDidMount(){
    setInterval(()=> {
      this.setState(()=>{
        return { val : 1}
      });
    }, 2000)
  }

  // shouldComponentUpdate(nextProp, nextState){
  //   console.log('nextState', nextState);
  //   console.log('currentState', this.state)
  //   return ( this.state.val === nextState.val ? false :true)
  // }

  render() {
    console.log('render PureComp');
    return (
      <div className="PureComp">
          <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default PureComp;