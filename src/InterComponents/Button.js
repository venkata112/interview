import React, { Component } from 'react';
import './button.css'
import { func } from 'prop-types';
import InfiniteUsers from './ScrollCmp';



var dots='';
var items = 'brands'
class Button extends Component {
    constructor(){
        super()
        this.state = {
            btn:'',
            enable:false,
            disp:'none'
        }
    }
    btnCall = () =>{        
        this.setState({btn:'.....',enable:true, disp:'block'})
        setTimeout(() =>{
            this.dotPrint()
        },4000)      
    }

    dotPrint = () =>{        
            this.setState({btn:'',enable:false, disp:'none'})    
                      
    }
    localStorage = () =>{
        console.log(items)
        localStorage.setItem('it1',items)
        var l =localStorage.getItem('it1')
        console.log(l)
    }   
    render() { 
        return ( 
            <div>
               <h2> This is Button Component </h2>
               <button disabled = {this.state.enable} className={this.state.enable?'btn1':'btn'} onClick = {this.btnCall}>
                 ButtonCmp{this.state.btn}<span className="lds-ellipsis" style={{display:this.state.disp}}><span></span><span></span><span></span><span></span></span>
               </button>   
               <div>
                  { this.state.enable &&
                      <div>
                        <img src = {'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'}
                            style={{height:200,width:270}} />
                        <img src = {'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'}
                        style={{height:200,width:270}} />
                        <img src = {'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'}
                            style={{height:200,width:270}} />
                        <img src = {'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'}
                        style={{height:200,width:270}} />
                     </div>}
               </div>
                    <button onClick= {this.localStorage}>localstorage</button>
         <InfiniteUsers />

            </div>
         );
    }
}
 
export default Button;