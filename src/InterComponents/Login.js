import React, { Component } from 'react';
import './login.css'
import Button from './Button'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                <div className='login'>
                    <form>
                    <label for="fname" className='fname'>UserName :&nbsp;&nbsp;</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your username.."/>
                    <br/>
                    <label for="lname" className='lname'>Password &nbsp;&nbsp;:</label>
                    &nbsp;&nbsp;<input type="text" id="lname" name="lastname" placeholder="Your password.."/>
                    </form>
                    <Button/>
                </div>

            </div>
         );
    }
}
 
export default Login;