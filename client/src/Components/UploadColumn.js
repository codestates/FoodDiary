import React, {useState} from 'react';
import Sticky from 'react-sticky-el';
import uploadIcon from '../images/upload.png'
import './UploadColumn.css';
import axios from 'axios';
function Upload () {

  const [feedInfo, setFeedInfo] = useState({
      title: '',
      img: 'aaa',
      comment:''
    });
    const handleInputValue = (key) => (e) => {
      setFeedInfo({ ...feedInfo, [key]: e.target.value });
    };
    
    const UploadFeed = ()=> {
      if(feedInfo.title === "" || feedInfo.img === "" || feedInfo.comment === ""){
        alert("작성 다 해주세요!")
      } else{
        axios.post('https://localhost:4000/article',{   
            title:feedInfo.title,
            image:feedInfo.img,
            comment:feedInfo.comment
          })
          .then(()=>{
              alert('Post Feed Success!')
          })
          .catch((e)=>{
              alert("Post Feed Failed")
          })
      }
    }
    
        return (
          <Sticky>
            <div className="upload_container">
            
            <div className="upload_title">
              <input type="text" placeholder="Title Here!" onChange={handleInputValue('title')}></input>
            </div>
      
            <div>
            uploading an image here
              <img src="" alt="pictures"  width="450px"/>
          {/* 이미지 들어가는데 onChange={handleInputValue('image') */}
            </div>
  
            <div className="upload_description" >
                <textarea className="upload_text" type="textbox" placeholder="Comments Here!" onChange={handleInputValue('comment')}/>
            </div>

            <div>
              <img className="upload_btn" onClick={UploadFeed} src={uploadIcon} alt="pictures" width="615px"/>
            </div>
          
          </div>
          </Sticky>
        )
    }

export default Upload;