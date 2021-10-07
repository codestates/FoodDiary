import React, { Component } from 'react';
import './Feeds.css';
import Posts from './Posts';


class Feeds extends Component {
    constructor(props) {
      super(props);
      this.state = {
        postArray:[]
      }
    }

    componentDidMount() {
      this.getPost();
    }

    getPost=()=>{
      let data=[
        {
          "postId":"123",
          "username":"kimcoding",
          "postImageURL":"https://images.freeimages.com/images/large-previews/2b6/food-18-1323940.jpg",
          "timeStamp":"123154"
          
        }
      ];
      this.setState({postArray: data});
    }

    render() {
      return (
        <div>
          {
            this.state.postArray.map((item, index)=>(
              <Posts id={item.postId} username={item.username} postimage={item.postImageURL} />
            ))
          }
          
        </div>
      );
    }
  }
  
  
  export default Feeds