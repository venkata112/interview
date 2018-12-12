import React, {Component} from 'react';  
import Axioscmp from './Axioscmp';
import NavigationCmp from './NavigationCmp'

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: ''

      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    this.setState({})
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return (
      <div>
      <form className="container" onSubmit={this.handleFormSubmit}>

        Name : <input /> {/* Name of the user */} <br/>
       Age : <input /> {/* Input for Age */} <br/>
       Gender : <select /> {/* Gender Selection */}<br/>
        Skills :<checkbox /> {/* List of Skills (eg. Programmer, developer) */}<br/>
        About You :<textarea /> {/* About you */}<br/><br/><br/>
        <input type="submit" value="Submit" />&nbsp;&nbsp;&nbsp;
        <input type="submit" value="clear" />

      </form>
      </div>
    );
  }
}

export default FormContainer;
// <Axioscmp/> 
