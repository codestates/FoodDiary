import React, { useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Components/Signup'
import Mainpage from './Pages/Mainpage';
import axios from 'axios';


export default function App() {
  
  const [isLogin, setIsLogin] = useState(false);
  // const [userInfo, setUserInfo] = useState("");

  const history = useHistory();
  const isAuthenticated = () => {
    axios.get('https://localhost:4000/auth')
    .then(setIsLogin(true));
    history.push("/")
    console.log("aaaa");
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

  // useEffect(() => {
  //   isAuthenticated();
  // },[userInfo]);
  

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
          <Signup/>
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

