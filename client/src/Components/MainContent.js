import React,{useState, useEffect} from 'react';
import './MainContent.css';
import FriendsBar from './FriendsBar';
import Feeds from './Feeds';
import axios from 'axios';


function MainContent () {

  const [loginId, setLoginId]=useState(null);

  const checkAuth = () => {
    axios.get('https://localhost:4000/auth',{withCredentials:true})
    .then((res) => {
      setLoginId(res.data.data.userInfo.userId)
    })
  }
  
  useEffect(()=>{
    checkAuth();
  })
  

  return (
    <div>       
      <FriendsBar loginId={loginId} />
      <Feeds loginId={loginId} />
    </div>
  )
    
  }


export default MainContent