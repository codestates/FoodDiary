import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import foodDiary_logo from '../images/Food_Diary_Hori.png';
import home from '../images/home.svg';
import friends from '../images/love.svg';
import invitation from '../images/find.svg';
import Avatar from '@mui/material/Avatar';
import profile from '../images/pp1.png';
import './NavigationBar.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function NavigationBar({handleLogout, handleIconClick,userInfo,GetFriendArticle}) {
  const history = useHistory();
  useEffect(()=>{
    if(userInfo.username===""){
      alert("Join Us!")
      history.push("https://localhost:4000/login")
    }
  },[])

  const showFriendsFeed = ()=> {
    console.log("show friends feed")
    // Todo:
    let url = 'https://localhost:4000/friends/'+userInfo.userId
    let friendList = [];
    const friend_articles = [];

        axios.get(url,{withCredentials:true})
          .then((res)=>{
            for(let i of res.data){
              friendList.push(i.friendUser.id)
            }
            console.log(friendList)
          })
          .then(()=>{
            for(let friend of friendList){
              let get_url = 'https://localhost:4000/article?id='+friend
              axios.get(get_url,{withCredentials:true})
              .then((res)=>{
                console.log(res.data[0].id)
                friend_articles.push(res.data[0])
              })
            }
            console.log("articles:",friend_articles)
            GetFriendArticle(friend_articles)
          })
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
                  <a href="https://localhost:3000/mainpage"><img className="navibar_logo" src={foodDiary_logo} alt="food diary logo" width="200px"/></a>
              </Grid>
              <Grid item xs={3}>
                  <input  className="navibar_searchBar" text="text" placeholder="Search"/>
              </Grid>


              <Grid item xs={3} style={{"display":"flex", "height":"55px"}}>
                  <img className="navibar_img home" onClick={handleIconClick} src={home} alt="home icon" width="25px"/>
                  <img className="navibar_img friends" onClick={handleIconClick} src={friends} alt="friends icon" width="25px"/>
                  <img className="navibar_img invitation" onClick={handleIconClick} src={invitation} alt="invitation icon" width="25px"/>
                  <Avatar className="navibar_img" onClick={checkLogout} src={profile} style={{"maxWidth":"25px", "maxHeight":"25px"}}></Avatar>
                  <p style={{"color":"blue", "marginTop":"14px", "marginLeft":"2px"}}>Hi, {userInfo.username}</p> 

              </Grid>
              <Grid item xs={1}></Grid>
        </Grid>
        </div>
     </div>
   );
 }
    
    
export default NavigationBar