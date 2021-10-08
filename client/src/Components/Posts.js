import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import love from '../images/love.svg';
import editicon from '../images/edit.svg';
import Edit from './Editing';
import './Posts.css';


class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = { }
    }
    render() {
      return (
        <div className="post_container">

          <div className="post_header">
            <Avatar className="post_image" src={this.props.profilePic}/>
            <div className="post_username">{this.props.userName}</div>
            <div>
              <img style={{ "marginLeft": "1rem","marginTop":"18px" }} className="post_like" src={love} alt="love icon"/> 
            </div>
            <div>
            <img onClick={()=>{ alert('Edit Post'); }} style={{ "marginLeft": "8rem","marginTop":"18px", "cursor":"pointer", "width":"15px"}} src={editicon} alt="editing icon" />
              <Edit/>
            </div>
          </div>

          <div className="post_title">
            <h3>{this.props.title}</h3>
          </div>
    
          <div>
            <img src={this.props.postImage} alt="pictures" width="615px"/>
          </div>

          <div className="post_description">
              <h3 style={{"marginLeft": "20px"}}>Photo Description</h3>
              <p className="post_text">{this.props.text}</p>
          </div>
          
        </div>
      );
    }
  }
  
  
  export default Posts