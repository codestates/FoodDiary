import React, {useState, useEffect} from 'react';
import NavigationBar from '../Components/NavigationBar';
import MainContent from '../Components/MainContent';
import Side from '../Components/Side';
import './Mainpage.css';
import UploadColumn from '../Components/UploadColumn'
import Invitation from '../Components/Invitation'
import Grid from '@mui/material/Grid';

function Mainpage ({handleLogout,userInfo,isAuthenticated}) {
  
  const [globalState, setGlobalState] = useState({
    currentPage:'home'
  });

  const handleIconClick = (event) => {
    if (event.target.classList.contains('home')) {
      setGlobalState({ currentPage: 'home' });
    }
    if (event.target.classList.contains('invitation')) {
      setGlobalState({ currentPage: 'invitation' });
    }
  };

  

  
    return (
      <div>
        <NavigationBar userInfo={userInfo} isAuthenticated={isAuthenticated} handleIconClick={handleIconClick} handleLogout={()=>{handleLogout()}} />
        <Grid container>
          <Grid item xs={2}></Grid>

            <Grid item xs={6}>
              <MainContent/>
            </Grid>

            <Grid item xs={2}>
              <Side globalState={globalState} userInfo={userInfo}/>
            </Grid>

            <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
  }


export default Mainpage