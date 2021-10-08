import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import MainContent from '../Components/MainContent';
import './Mainpage.css';
import Upload from '../Components/UploadColumn';

function Mainpage ({handleLogout}) {
  
  // const [globalState, setGlobalState] = useState({
  //   currentPage: 'upload',
  // });
  const handleIconClick = (event) => {
    // if (event.target.classList.contains('fa-comment-dots')) {
    //   setGlobalState({ currentPage: 'tweets' });
    // }

    // if (event.target.classList.contains('fa-bell')) {
    //   setGlobalState({ currentPage: 'notifications' });
    // }
    console.log("???");
  };
  
  
    return (
      <div>
        <NavigationBar handleLogout={()=>{handleLogout()}} handleIconClick={handleIconClick} />
        
        <MainContent/>
        <Upload />
      </div>
    );
  }


export default Mainpage