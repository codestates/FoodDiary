import React, {useState} from 'react';
import NavigationBar from '../Components/NavigationBar';
import MainContent from '../Components/MainContent';
import Side from '../Components/Side';
import './Mainpage.css';

import Grid from '@mui/material/Grid';

function Mainpage ({handleLogout,userInfo,loginId}) {
  
  const [globalState, setGlobalState] = useState({
    currentPage:'home'
  });

  const handleIconClick = (event) => {
    if (event.target.classList.contains('home')) {
      setGlobalState({ currentPage: 'home' });
    }
    if (event.target.classList.contains('invitation')) {
      setGlobalState({ currentPage: 'invitation' });
      console.log(loginId)
    }
    if (event.target.classList.contains('friends')) {
      setGlobalState({ currentPage: 'friends' });
      Getter()
    }
  };

  const Getter = ()=>{
    
  }

    return (
      <div>
        <NavigationBar userInfo={userInfo} handleIconClick={handleIconClick} handleLogout={()=>{handleLogout()}} />
        <Grid container>
          <Grid item xs={2}></Grid>

            <Grid item xs={6}>
              <MainContent Getter={Getter} globalState={globalState} />
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