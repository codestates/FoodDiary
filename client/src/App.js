import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Mainpage from './Pages/Mainpage';
import axios from 'axios';


export default function App() {
  
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserinfo] = useState({
    email:"",
    username:"",
    birth:"",
    userId:0
  });
  

  const history = useHistory();
  const isAuthenticated = () => {
      axios.get('https://localhost:4000/auth',{withCredentials:true})
      .then((res) => {
        const {email, username, birth, userId} = res.data.data.userInfo
        setUserinfo({email:email, username:username, birth:birth, userId:userId})
        setIsLogin(true)
        history.push('/');
      })
    }
   
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post('https://localhost:4000/signout',{},{withCredentials:true}).then((res) => {
      setUserinfo({
        email:"",
        username:"",
        birth:"",
        userId:0
      });
      setIsLogin(false);
      history.push('/');
    });
  };

  useEffect(() => {
    isAuthenticated();
  },[]);


  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
          />
        </Route>
        <Route exact path='/mainpage'>
          <Mainpage handleLogout={handleLogout} userInfo={userInfo} loginId={userInfo.userId}/>
        </Route>
        <Route path='/'>
          {isLogin ? <Redirect to='/mainpage' /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}

