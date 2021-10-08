import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup'
import Mainpage from './components/Mainpage';
import axios from 'axios';


export default function App() {

  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
  const isAuthenticated = () => {
    axios.post('https://localhost:4000/auth')
    .then(setIsLogin(true));
  };
  
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post('https://localhost:4000/signout').then((res) => {
      setIsLogin(false);
      history.push('/login');
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);
  

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
          />
        </Route>
        <Route exact path='/signup'>
          <Signup isLogin={isLogin} />
        </Route>
        <Route exact path='/mainpage'>
          <Mainpage handleLogout={handleLogout}/>
        </Route>
        <Route path='/'>
          {isLogin ? <Redirect to='/mainpage' /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}

