import React,{useState, useEffect} from 'react';
import './MainContent.css';
import FriendsBar from './FriendsBar';
import Feeds from './Feeds';
import axios from 'axios';


function MainContent ({Getter, globalState}) {

  const [loginId, setLoginId]=useState(null);

  const checkAuth = () => {
    axios.get('https://localhost:4000/auth',{withCredentials:true})
    .then((res) => {
      setLoginId(res.data.data.userInfo.userId)
    })
    console.log("loginId In main content:",loginId)
  }
  
  useEffect(()=>{
    checkAuth();
  })

  
  

  return (
    <div>       
      <FriendsBar loginId={loginId} />
      <Feeds Getter={Getter} loginId={loginId} globalState={globalState} />
    </div>
  )
    
  }


export default MainContent