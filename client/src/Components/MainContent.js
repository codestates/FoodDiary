import React from 'react';
import Grid from '@mui/material/Grid';
import './MainContent.css';
import FriendsBar from './FriendsBar';
import Feeds from './Feeds';
import Side from './Side'


function MainContent ({userInfo}) {

  return (
    <div>       
      <FriendsBar userInfo={userInfo}/>
      <Feeds userInfo={userInfo}/>
    </div>
  )
    
  }


export default MainContent