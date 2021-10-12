import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Mainpage from './Pages/Mainpage';
import axios from 'axios';


export default function App() {
  
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserinfo] = useState(null);

  const history = useHistory();
  const isAuthenticated = () => {
    axios.get('https://localhost:4000/auth').then((res) => {
      console.log(res);
      if(res.data.data.userInfo !== null){
        
        console.log(res)
        
      setIsLogin(true)
      history.push('/');
    } 
      
    });
    // console.log("authenticated")
    //   axios.get('https://localhost:4000/auth')
    //   .then((res) =>{
    //     if(res == null){
    //       console.log("notnull")
    //     } else{
    //       console.log("NULL!")
    //     }
    //   })
      
    //   .then((res) => {
    //     if(res.data.data !== ){
          
    //       const email = res.data.data.email;
    //       const username = res.data.data.username;
    //       const birth = res.data.data.birth;

    //       console.log(res)
    //       setUserinfo({
    //         email:email,
    //         username:username,
    //         birth:birth
    //     });
    //     console.log(userInfo)
    //     setIsLogin(true)
    //   }
    //     console.log("res:null")
    // })
  }
   
      
    //   const {email, username, birth} = res.data.userInfo;
    //   setUserinfo({
    //     email,username,birth
    //   });
    //   setIsLogin(true);
    //   history.push("/")
    //   console.log(userInfo);
    // })
    
  // };
  
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post('https://localhost:4000/signout').then((res) => {
      setUserinfo(null);
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
        {/* <Route exact path='/signup'>
          <Signup/>
        </Route> */}
        <Route exact path='/mainpage'>
          <Mainpage handleLogout={handleLogout} userInfo={userInfo}/>
        </Route>
        <Route path='/'>
          {isLogin ? <Redirect to='/mainpage' /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}

