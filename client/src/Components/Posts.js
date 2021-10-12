import { Avatar } from '@mui/material';
import React from 'react';
import love from '../images/love.svg';
import editicon from '../images/edit.svg';
import Edit from './Editing';
import './Posts.css';


function Posts (props) {
  const {id, userName, title, postImage, text} = props
  
      return (
        <div className="post_container">

          <div className="post_header">
            <Avatar className="post_avatar" src={postImage}/>
            <div className="post_username">{userName}</div>
            <div>
              <img onClick={()=>{ alert('Added to FriendsList'); }}
               style={{ "marginLeft": "1rem","marginTop":"18px", "width":"27px", "height":"27px", "cursor":"pointer" }} 
               className="post_like" 
               src={love} 
               alt="love icon"/> 
            </div>
          </div>

          <div>
            <img onClick={()=>{ alert('Edit Post'); }} 
            style={{"height":"27px", "marginLeft": "36rem","marginTop":"-28px", "cursor":"pointer", "width":"30px"}} 
            src={editicon} alt="editing icon" />
          </div>

          <div className="post_title">
            <h3>{title}</h3>
          </div>
    
          <div>
            <img src={postImage} alt="pictures" width="613px"/>
          </div>

          <div className="post_description">
              <p className="post_text">{text}</p>
          </div>
          
        </div>
      );
    }
  
  
export default Posts