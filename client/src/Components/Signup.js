import './Signup.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



 function SignUp(props)  {
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
    username: '',
    birth: '',
    code:''
  });
  
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const history = useHistory();

  const handleSignup = () => {
    
    // if(userinfo.email === "" || userinfo.password === "" || userinfo.username === "" || userinfo.mobile === ""){
      
    // } else{
      axios.post('https://localhost:4000/signup',{
        'email' : userinfo.email,
        'password' : userinfo.password,
        'username' : userinfo.username,
        'birth' : userinfo.birth,
        'code': userinfo.code
      },{ withCredentials: true })
      .then(console.log("aaaa"))
      props.changeLogin();
    // }
  };
    return (
      <div>
        <input className="login_text" type="text" placeholder="Email" onChange={handleInputValue('email')}/>
        <input className="login_text" type="password" placeholder="Password" onChange={handleInputValue('password')}/>
        <input className="login_text" type="text" placeholder="Full Name" onChange={handleInputValue('name')}/>
        <input className="login_text" type="text" placeholder="Birthday YYMMDD" onChange={handleInputValue('birth')}/>
        <input className="login_text" type="text" placeholder="Invitation Code" onChange={handleInputValue('code')}/>
        <button className="login_btn" onClick={handleSignup}>Sign Up</button>
      </div> 
    );
  }
;

export default SignUp;
