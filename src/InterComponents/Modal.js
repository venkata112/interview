import React, { Component } from 'react';
import Login from './Login'
import Register from './Register'
import './modal.css'

class Modal extends Component {
    constructor(){
        super();
        this.state = {
            regist:true,
            show_log_reg:'block',
            main_log_reg:'none'
            
        }
    }

    tabCmp = (x) =>{
        this.setState({regist:x})
    }
    dispModal = () =>{
        this.setState({main_log_reg:'block',show_log_reg:'none'})
    }
    render() { 
        return ( 
            <div >  
            <div className='show_log_reg'  style={{display:this.state.show_log_reg}}><span onClick={this.dispModal}
             className='span'>Show Login/Registration</span> </div>
            <div className='main_log_reg'  style={{display:this.state.main_log_reg}}>
                <div>
                    <button className='left' onClick={() => this.tabCmp(true)}>Register</button>
                    <button className='right' onClick={() => this.tabCmp(false)}>Login</button>
                 </div>
                <div className ='modal' >            
                   {this.state.regist ? 
                       <div className = 'regist_m'><Register/></div> 
                       : 
                   <div className='login_m'><Login/></div>   
                   }                
                </div>   
            </div>
            </div>
         );
    }
}
 
export default Modal;