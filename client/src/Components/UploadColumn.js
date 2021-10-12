import React, {useState} from 'react';
import Sticky from 'react-sticky-el';
import uploadIcon from '../images/upload.png'
import './UploadColumn.css';
import axios from 'axios';
import { useDropzone } from "react-dropzone"
import './UploadColumn.css';
function Upload ({userInfo}) {
  const [files, setFiles] = useState([])

  const images = files.map((file) => (
    <div key={file.name}>
      <div style={{ textAlign: "center"}}>
        <img src={file.preview} style={{ width: "50%" }} alt="preview" />
      </div>
    </div>
  ))

  //{~~,~~}
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const [feedInfo, setFeedInfo] = useState({
      title: '',
      // img: null,
      comment:''
    });
    const handleInputValue = (key) => (e) => {
      setFeedInfo({ ...feedInfo, [key]: e.target.value });
      // console.log(images[0].key)
    };
    
    const UploadFeed = ()=> {
      // if(feedInfo.title === "" || feedInfo.img === "" || feedInfo.comment === ""){
      //   alert("작성 다 해주세요!")
      // } else{
        axios.post('https://localhost:4000/article',{   
            title:feedInfo.title,
            image:"aaa",
            comment:feedInfo.comment,
            id:45
          })
          .then(()=>{
              alert('Post Feed Success!')
          })
          .catch((e)=>{
              alert("Post Feed Failed")
          })
      // }
    }
    
        return (
          <Sticky>
            <div className="upload_container">
            
            
              <input type="text" placeholder="Title Here!" onChange={handleInputValue('title')}/>
            
      
            <div {...getRootProps()}>
              <input {...getInputProps() } />
              <p style={{textAlign: "center"}}>Drop files here</p>
            </div>
            <div>{images}</div>

           
  
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