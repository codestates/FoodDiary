import './Signup.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



 function SignUp(props)  {
  const [errorMessage, setErrorMessage] = useState("");
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
    
    if(userinfo.email === undefined  ||
      userinfo.password === undefined  ||
      userinfo.username === undefined  ||
      userinfo.birth === undefined||
      userinfo.code === undefined){
        setErrorMessage('All fields are required!')
      } else{
        axios.post('https://localhost:4000/signup',{
        'email' : userinfo.email,
        'password' : userinfo.password,
        'username' : userinfo.username,
        'birth' : userinfo.birth,
        'code': userinfo.code
      },{ withCredentials: true })
      .then(console.log("aaaa"))
      props.changeLogin();

      }
      
    
  };

  const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp = /^(?=.\d)(?=.[a-zA-Z])[0-9a-zA-Z]{8,10}$/

    if (regExp.test(e.target.value)===false) {
      alert("Doesn't match the requirements")
      return window.location.reload();
    }
  }

  const checkEmail = (e) => {
    //email check
    var regExp = /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    if (regExp.test(e.target.value)===false) {
      alert("Please enter a valid email")
      return window.location.reload();
    }
  }


      return (
      <div>
         <div className='alert-box' style={{color:"red"}} >{errorMessage}</div>
        <input className="login_text" type="text" placeholder="Email" onBlur={checkEmail} onChange={handleInputValue('email')}/>
        <input className="login_text" type="password" placeholder="Password = 8~10 letters with numbers" onBlur={checkPassword} onChange={handleInputValue('password')}/>
        <input className="login_text" type="text" placeholder="Full Name" onChange={handleInputValue('name')}/>
        <input className="login_text" type="text" placeholder="Birthday YYMMDD" onChange={handleInputValue('birth')}/>
        <input className="login_text" type="text" placeholder="Invitation Code" onChange={handleInputValue('code')}/>
        <button className="login_btn" onClick={handleSignup}>Sign Up</button>

      </div> 
    );
  }
;

export default SignUp;
