import './Signup.css';
import React, { useState } from 'react';
import axios from 'axios';



 function SignUp(props)  {
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleSignup = () => {
    
    if(userinfo.email === undefined ||
      userinfo.password === undefined ||
      userinfo.username === undefined ||
      userinfo.birth === undefined ||
      userinfo.code === undefined){
        setErrorMessage('Something went wrong!')
      } else{
        axios.post('https://localhost:4000/signup',{
        'email' : userinfo.email,
        'password' : userinfo.password,
        'username' : userinfo.username,
        'birth' : userinfo.birth,
        'code': userinfo.code
      },{ withCredentials: true })
      .then((res)=>{console.log(res)})
      props.changeLogin();
      }
  };

  const checkPassword = (e) => {
    //  6 ~ 20자 영문, 숫자 조합
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/

    if (regExp.test(e.target.value)===false) {
      alert("Doesn't match the requirements")
      e.target.value = '';
    }
  }

  const checkEmail = (e) => {
    //email check
    let regExp = /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    
    if (regExp.test(e.target.value)===false) {
      alert("Please enter a valid email")
      e.target.value = '';
    }
  }

  const checkBirth = (e) => {
    //birth check
    var regExp = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/

    if (regExp.test(e.target.value)===false) {
      alert("Please enter a 6 digit birth date")
      e.target.value = '';
    }
  }


      return (
      <div>

        <div className='alert-box' style={{color:"red"}} >{errorMessage}</div>
        <input className="login_text" type="text" placeholder="Email" onBlur={checkEmail} onChange={handleInputValue('email')}/>
        <input className="login_text" type="password" placeholder="Pw 6~20 letters with numbers" onBlur={checkPassword} onChange={handleInputValue('password')}/>
        <input className="login_text" type="text" placeholder="Full Name" onChange={handleInputValue('name')}/>
        <input className="login_text" type="text" placeholder="Birthday YYMMDD" onBlur={checkBirth} onChange={handleInputValue('birth')}/>
        <input className="login_text" type="text" placeholder="Invitation Code" onChange={handleInputValue('code')}/>
        <button className="login_btn" onClick={handleSignup}>Sign Up</button>

      </div>
    );
  }
;

export default SignUp;
