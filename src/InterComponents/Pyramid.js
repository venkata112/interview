import React, { Component } from 'react';


var str = ''
var str1 = ''
var arr=[]
class Pyramid extends Component {
  constructor(){
      super();
      this.state = {
          star : [],
          print:[],
          counter:1
      }
    //   this.printStar = this.printStar.bind(this)
  }

  callPyramid = () => {
    console.log('star goes here')

    //var self = this;
    function printStar(n){
        // console.log(self.state.print)

        for(var i=0;i<n;i++){
            str =''
    
            for(var j=0;j<n-i;j++){
                str =' '+str;
            } 
            for(var k=0;k<2*i+1;k++ ){
                str = str+'*'
               
            }
            arr.push(str)
            // console.log(arr.push(str))
            str1 =str1+str+'\n'
            // console.log(str)
        }   
    }
    printStar(5)
   this.setState({star:arr})
  }

  changeCounter = () =>{
    console.log('before',this.state.counter)

    this.setState({counter:5})
    this.setState({counter:4})
    console.log('after',this.state.counter)
  } 
    render() { 
        return ( 
            <div>
                Pyrmid Component ............   
                <p>Print Pyramid: {this.state.star.map(el =>                      
                            <div style={{textAlign:'center'}}>{el}</div>                    
                )}
                </p>        
                <br/>
                <button onClick = {this.callPyramid}>callPyramid</button>
                <button onClick = {this.changeCounter}>changeCounter</button>
                <br/>
                {this.state.counter}

            </div>
          );
    }
}
 
export default Pyramid;

// <p>Print Pyramid.. : {this.state.print.map(el =>{
//     <li>{el}</li>
// })}</p>