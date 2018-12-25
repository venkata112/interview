import React, { Component } from 'react';

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  };
  
   class FormValid extends React.Component {
    state = initialState;
  
    handleChange = event => {
    //   const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    validate = () => {
      let nameError = "";
      let emailError = "";
      let passwordError = "";

      // let passwordError = "";
  
      if (!this.state.name) {
        nameError = "name cannot be blank";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "invalid email";
      }
      if (this.state.password.length<8) {
        passwordError = "Password length should be greater than 8 character";
      }
  
      if (emailError || nameError || passwordError) {
        this.setState({ emailError, nameError, passwordError});
        return false;
      }
  
      return true;
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);
      }
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
           Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
           <input
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </div><br/>
          <div>
          Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
           <input
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div> <br/>
          <div>
          password&nbsp;: 
           <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div><br/>
          <button type="submit">submit</button>
        </form>
      );
    }
  }

  export default FormValid;