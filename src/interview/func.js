 
 import React, { Component, PureComponent } from 'react';
 const Temp = (props) => {
    console.log('render Temp');
    return (<div>this is PureComp: {props.val}</div>)
  }
  export default Temp;