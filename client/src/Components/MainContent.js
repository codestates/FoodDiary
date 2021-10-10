import React from 'react';
import Grid from '@mui/material/Grid';
import './MainContent.css';
import FriendsBar from './FriendsBar';
import Feeds from './Feeds';
import Side from './Side'


function MainContent () {

  return (
    <div>       
      <FriendsBar/>
      <Feeds/>
    </div>
  )
    
  }


export default MainContent