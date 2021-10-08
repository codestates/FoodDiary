import { Avatar } from '@mui/material';
import React from 'react';
import love from '../images/love.svg';
import editicon from '../images/edit.svg';
import './Posts.css';


function Posts (props) {
  const {id, userName, title, postImage, text} = props
  
      return (
        <div className="post_container">

          <div className="post_header">
            <Avatar className="post_image" src={postImage}/>
            <div className="post_username">{userName}</div>
            <div>
              <img onClick={()=>{ alert('Added to FriendList'); }} style={{ "marginLeft": "1rem","marginTop":"18px" }} className="post_like" src={love} alt="love icon"/> 
            </div>
            <div>
            <img onClick={()=>{ alert('Edit Post'); }} style={{ "marginLeft": "8rem","marginTop":"18px", "cursor":"pointer", "width":"30px", height:"27px"}} src={editicon} alt="editing icon" />
            </div>
          </div>

          <div className="post_title">
            <h3>{title}</h3>
          </div>
    
          <div>
            <img src={postImage} alt="pictures" width="615px"/>
          </div>

          <div className="post_description">
              <h3 style={{"marginLeft": "20px"}}>Photo Description</h3>
              <p className="post_text">{text}</p>
          </div>
          
        </div>
      );
    }
  
  
export default Posts