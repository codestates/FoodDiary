import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import foodDiary_logo from '../images/Food_Diary_Hori.png';
import home from '../images/home.svg';
import friends from '../images/love.svg';
import invitation from '../images/find.svg';
import Avatar from '@mui/material/Avatar';
import profile from '../images/pp1.png';
import './NavigationBar.css';
import { useHistory } from 'react-router-dom';

function NavigationBar({ handleLogout, handleIconClick, userInfo }) {
  const history = useHistory();
  useEffect(() => {
    if (userInfo.username === '') {
      history.push('https://localhost:4000/login');
    }
  }, []);

  const checkLogout = () => {
    if (window.confirm('Are you sure you want Logout?')) {
      handleLogout();
    } else {
      // Do nothing!
      console.log("I'm Still in!");
    }
  };

  return (
    <div style={{ position: 'sticky', top: '0', 'z-index': '1' }}>
      <div className='navibar_contents'>
        <Grid container style={{ height: '30px' }}>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <a href='https://localhost:3000/mainpage'>
              <img
                className='navibar_logo'
                src={foodDiary_logo}
                alt='food diary logo'
                width='200px'
              />
            </a>
          </Grid>
          <Grid item xs={3}>
            <input
              className='navibar_searchBar'
              text='text'
              placeholder='Search'
            />
          </Grid>

          <Grid item xs={3} style={{ display: 'flex', height: '55px' }}>
            <img
              className='navibar_img home'
              onClick={handleIconClick}
              src={home}
              alt='home icon'
              width='25px'
            />
            <img
              className='navibar_img friends'
              onClick={handleIconClick}
              src={friends}
              alt='friends icon'
              width='25px'
            />
            <img
              className='navibar_img invitation'
              onClick={handleIconClick}
              src={invitation}
              alt='invitation icon'
              width='25px'
            />
            <Avatar
              className='navibar_img'
              onClick={checkLogout}
              src={profile}
              style={{ maxWidth: '25px', maxHeight: '25px' }}
            ></Avatar>
            <p style={{ color: 'blue', marginTop: '14px', marginLeft: '2px' }}>
              Hi, {userInfo.username ? userInfo.username : userInfo.email}
            </p>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default NavigationBar;
