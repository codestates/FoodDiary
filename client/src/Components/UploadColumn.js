import React, { useState } from 'react';
import Sticky from 'react-sticky-el';
import uploadIcon from '../images/upload.png';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './UploadColumn.css';

function Upload({ userInfo }) {
  const [files, setFiles] = useState([]);

  const images = files.map((file) => (
    <div key={file.name}>
      <div style={{ textAlign: 'center' }}>
        <img src={file.preview} style={{ width: '50%' }} alt='preview' />
      </div>
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const [feedInfo, setFeedInfo] = useState({
    title: '',
    // img: null,
    comment: '',
    userId: '',
  });
  const handleInputValue = (key) => (e) => {
    setFeedInfo({ ...feedInfo, [key]: e.target.value });
    console.log(images);
  };

  const UploadFeed = () => {
    axios
      .post('https://localhost:4000/article', {
        title: feedInfo.title,
        image:
          'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aiZG/image/_v4A2iBohweicLRAaxyxDAuWFiE.jpg',

        comment: feedInfo.comment,
        userId: userInfo.userId,
      })
      .then(() => {
        alert('Post Feed Success!');
        window.location.reload();
      })
      .catch((e) => {
        alert('Post Feed Failed');
      });
    // }
  };

  return (
    <Sticky>
      <div
        className='upload_container'
        style={{ position: 'sticky', top: '0', zindex: '1' }}
      >
        <input
          style={{ marginLeft: '8.5rem' }}
          type='text'
          placeholder='Title Here!'
          onChange={handleInputValue('title')}
        />

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p style={{ textAlign: 'center', height: '70px', marginTop: '10px' }}>
            Click to Upload File or Drag and Drop
          </p>
        </div>
        <div>{images}</div>

        <div className='upload_description'>
          <textarea
            style={{ maxWidth: '419px', maxHeight: '200px' }}
            className='upload_text'
            type='textbox'
            placeholder='Comments Here!'
            onChange={handleInputValue('comment')}
          />
        </div>

        <div>
          <img
            className='upload_btn'
            onClick={UploadFeed}
            src={uploadIcon}
            alt='pictures'
          />
        </div>
      </div>
    </Sticky>
  );
}

export default Upload;
