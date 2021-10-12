import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login_image from '../images/9364675fb26a.svg';
import logo_image from '../images/Food_Diary_Logo.png';
import appstore from '../images/app.png';
import playstore from '../images/play.png';
import apoint from '../images/Apoint_Logo.png';
import './Login.css';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/Signup';
import axios from 'axios';


function Login({handleResponseSuccess}) {
  const [isLogin, setIsLogin] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
});

const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
};



const changeLogin=() => {
    if (isLogin){
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }   
  }
  return (
      <div>
        <Grid container>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <div className="login_main">
              <div>
                  <img src={login_image} alt="phones" width="460px" style={{"marginTop":"15px"}}/>
              </div>

              <div>
                <div className="login_rightcomp">
                  <img className="login_logo" src={logo_image} alt="logo"/>
                  <div className="login_signin">
                    
                    {
<<<<<<< HEAD
                      isLogin ?
                      
                    <div>
                      <input className="login_text" type="text" placeholder="Email" onChange={handleInputValue('email')}/>
                      <input className="login_text" type="password" placeholder="Password" onChange={handleInputValue('password')}/>
                      <button className="login_btn" onClick={handleLogin}>Log In</button>
                  </div> : <SignUp changeLogin={changeLogin}/>
=======
                      isLogin ? 
                      <SignIn handleResponseSuccess={handleResponseSuccess} />
                      : <SignUp changeLogin={changeLogin}/>
>>>>>>> 89b940da81a6ecabdffe86c890bbdf9654dd63a1
                    }
                    
                    <div className="login_separatordiv">
                      <div className="login_dividor"></div>
                      <div className="login_fd">F. D.</div>
                      <div className="login_dividor"></div>
                    </div>

                    <div className="login_apointdiv">
                    <img src={apoint} alt="company logo" width="70px" style={{"marginRight":"2px"}}/>
                    <div className="login_apoint">By Apoint.Co</div>
                    </div>
                  
                    <div className="login_forgotPass">Forgot Password?</div>
                  </div>
                </div>

                <div className="login_invitation">

                    {
                      isLogin ? 
                      <div className="login_signup">
                        Have an Invitation? <span onClick={changeLogin} style={{"fontWeight":"bold", "color":"#0395F6", "cursor":"pointer" }}> Sign Up</span>
                      </div> :
                      <div className="login_signin">
                        Have an Account? <span onClick={changeLogin} style={{"fontWeight":"bold", "color":"#0395F6", "cursor":"pointer" }}> Sign In</span>
                      </div>
                    }

                </div>

                <div className="login_download">
                  <div>
                    Get the app
                  </div>
                  <div className="login_options">
                    <img className="login_downloadimg" src={appstore} alt="appstore" width="136px"/>
                    <img className="login_downloadimg" src={playstore} alt="playstore" width="136px"/>
                  </div>
                </div>

              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            </Grid>
        </Grid>
      </div>
  );
}
export default Login;