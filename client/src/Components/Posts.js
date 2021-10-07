import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import postimage from '../images/post.jpg';
import love from '../images/love.svg';
import './Posts.css';


class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render() {
      return (
        <div className="post_container">

          <div className="post_header">
            <Avatar className="post_image" src={this.state.profilePic}/>
            <div className="post_username">{this.state.username}</div>
          </div>

          <div className="post_title">
            <h3>갬성 터Gㅣ는 항ㅇr21</h3>
          </div>
                {/* this.state.postimage 으로 바꾸기 밑에껀 더미 데이터*/}
          <div>
            <img src={postimage} alt="pictures" width="615px"/>
          </div>

          <div className="post_description">
              <h3 style={{"marginLeft": "20px"}}>Photo Description</h3>
              <p className="post_text"> 이 항아리는 참 우울한 항아리다, 자기가 버려진줄도 모르고 새월을 오랫동안 마주하네...
                                        하지만 삶은 계속 되다..나는 왜 밤새면서 리엑트를 하고 있는가? 그것의 의문이다.
                                        제발 Height 늘어나야 한다!!!! 고고링 이것은 그냥 테스트 하는 중
                                        이것이 바로 항아리어라ㅏ 이 사람들아 예쁘지? ㅎㅎ</p>
          </div>

          <div>
            <img style={{"marginLeft": "18rem", "marginBottom": "-7rem"}} className="post_like" src={love} alt="love icon"/> 
          </div>
            
        </div>
      );
    }
  }
  
  
  export default Posts