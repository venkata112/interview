import React, { Component } from 'react';
import './login.css'
import Button from './Button'


class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                <div className = 'regist'>
                    <form>
                    <label for="fname" className='fname'>First Name :&nbsp;&nbsp;</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your username.."/>
                    <br/>
                    <label for="lname" className='lname'>Last Name&nbsp;:</label>
                    &nbsp;&nbsp;<input type="text" id="lname" name="lastname" placeholder="Your password.."/>
                    <br/>
                    <label for="lname" className='lname'>Email ID&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                    &nbsp;&nbsp;<input type="text" id="lname" name="lastname" placeholder="email.."/>
                    <br/>
                    <label for="lname" className='lname'>Phone No&nbsp;:</label>
                    &nbsp;&nbsp;<input type="text" id="lname" name="lastname" placeholder="phone no.."/>
                    </form>
                    <Button/>
                </div>

            </div>
         );
    }
}
 
export default Register;