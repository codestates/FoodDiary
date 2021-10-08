import React from 'react';
import Sticky from 'react-sticky-el';
import uploadIcon from '../images/upload.png'
import './UploadColumn.css';


function Upload () {
    
        return (
          <Sticky>
            <div className="upload_container">
            
            <div className="upload_title">
              <h3>uploading an image</h3>
            </div>
      
            <div>
              <img src="" alt="pictures"  width="450px"/>
            </div>
  
            <div className="upload_description" >
                <h3 style={{"marginLeft": "20px"}}>Photo Description</h3>
                <textarea className="upload_text" type="textbox"/>
            </div>

            <div>
              <img className="upload_btn" onClick={()=>{ alert('Upload Success!'); }} src={uploadIcon} alt="pictures" width="615px"/>
            </div>
          
          </div>
          </Sticky>
        )
    }

export default Upload;