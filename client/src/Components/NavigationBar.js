import React from 'react';
import Grid from '@mui/material/Grid';
import foodDiary_logo from '../images/Food_Diary_Hori.png';
import home from '../images/home.svg';
import friends from '../images/love.svg';
import invitation from '../images/find.svg';
import Avatar from '@mui/material/Avatar';
import profile from '../images/pp1.png';
import './NavigationBar.css';
import Sticky from 'react-sticky-el';


function NavigationBar({handleLogout, handleIconClick}) {

  const showFriendsFeed = ()=> {
    console.log("show friends feed")
    // Todo:
    // 하트버튼(친구 피드 보기)를 눌렀을때 게시글들이 친구들이 올린걸로만 보이게 필터해주는 api와 연결해주세요!
  }

  const checkLogout = () => {
    if (window.confirm('Are you sure you want Logout?')) {
      handleLogout();
    } else {
      // Do nothing!
      console.log("I'm Still in!");
    }
  }
  
  return (
     <div style={{"position": "sticky", "top": "0","z-index":"1"}}>
        <div className="navibar_contents">
        <Grid container style={{"height":"30px"}}>
              <Grid item xs={2}></Grid>
              <Grid item xs={3}>
                  <a href="https://localhost:3000/mainpage"><img className="navibar_logo" onclick src={foodDiary_logo} alt="food diary logo" width="168px"/></a>
              </Grid>
              <Grid item xs={3}>
                  <input  className="navibar_searchBar" text="text" placeholder="Search"/>
              </Grid>

              <Grid item xs={3} style={{"display":"flex", "height":"55px"}}>
                  <img className="navibar_img home" onClick={handleIconClick}
                   src={home} alt="home icon" width="25px"/>
                  <img className="navibar_img friends" onClick={showFriendsFeed} 
                  src={friends} alt="friends icon" width="25px"/>
                  <img className="navibar_img invitation" onClick={handleIconClick} 
                  src={invitation} alt="invitation icon" width="25px"/>
                  <Avatar className="navibar_img" onClick={checkLogout} 
                  src={profile} style={{"maxWidth":"25px", "maxHeight":"25px"}}></Avatar>
              </Grid>
              <Grid item xs={1}></Grid>
        </Grid>
        </div>
     </div>
   );
 }
    
    
export default NavigationBar