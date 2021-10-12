import React, { useState } from 'react';
import axios from 'axios';
import '../Pages/Login.css';


function SignIn ({handleResponseSuccess}) {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ""
    });
    
    const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };
    
    const handleLogin = () => {
        // if (loginInfo.email === '' || loginInfo.password === '') {

        // } else {
          axios.post('https://localhost:4000/signin',{
              email:loginInfo.email,
              password:loginInfo.password
          },{ withCredentials: true })
        //   .then(console.log("login success"))
          .then((res)=>{
              console.log(res)
            handleResponseSuccess();
          })
        // }
    }
    
    return (
        <div>
            <input className="login_text" type="text" placeholder="Email" onChange={handleInputValue('email')}/>
            <input className="login_text" type="password" placeholder="Password" onChange={handleInputValue('password')}/>
            <button className="login_btn" onClick={()=>{handleLogin()}}>Log In</button>
        </div>
    )
}


export default SignIn;