import React, { Component } from 'react';
import './Login.css'


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <input className="login_text" type="text" placeholder="Email"/>
                <input className="login_text" type="password" placeholder="Password"/>
                <button className="login_btn">Log In</button>
            </div>
        )
    }
}

export default SignIn;