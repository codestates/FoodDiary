import React, { useState } from "react"
import Sticky from 'react-sticky-el';
import uploadIcon from '../images/upload.png'
import { useDropzone } from "react-dropzone"
import './UploadColumn.css';


function Upload () {

  const [files, setFiles] = useState([])

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

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "450px", height: "200px" }} alt="preview" />
      </div>
    </div>
  ))
    
    return (
      <Sticky>
        <div className="upload_container">
        
        <div className="upload_title">
          <h3>여기는 제목이야</h3>
        </div>
  
        <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p style={{textAlign: "center"}}>Drop files here</p>
        </div>
         <div>{images}</div>

        <div className="upload_description" >
            <textarea className="upload_text"  placeholder="explain your deliciouse picture" type="textbox"/>
        </div>

        <div>
          <img className="upload_btn" onClick={()=>{ alert('Upload Success!'); }} src={uploadIcon} alt="pictures" width="615px"/>
        </div>
      
      </div>
      </Sticky>
        )
    }

export default Upload;