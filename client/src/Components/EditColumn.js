import React, { useState } from 'react';
import Sticky from 'react-sticky-el';
import uploadIcon from '../images/upload.png';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './EditColumn.css';

function EditColumn({ articleId }) {
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
  };

  const EditFeed = () => {
    axios.put(
      'https://localhost:4000/article',
      {
        id: articleId,
        title: feedInfo.title,
        image:
          'https://img7.yna.co.kr/etc/inner/KR/2019/01/24/AKR20190124092700005_01_i_P2.jpg',
        comment: feedInfo.comment,
      },
      { withCredentials: true }
    );
    window.location.reload();
  };

  return (
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
          onClick={EditFeed}
          src={uploadIcon}
          alt='pictures'
        />
      </div>
    </div>
  );
}

export default EditColumn;
