import React, { Component } from 'react';
import "./Signup.css"

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }  
  render() {
    return (
      <div>
        <input className="login_text" type="text" placeholder="Email"/>
        <input className="login_text" type="password" placeholder="Password"/>
        <input className="login_text" type="text" placeholder="Full Name"/>
        <input className="login_text" type="text" placeholder="Birthday YYMMDD"/>
        <input className="login_text" type="text" placeholder="Invitation Code"/>
        <button className="login_btn">Sign Up</button>
      </div> 
    );
  }
};

export default SignUp;
