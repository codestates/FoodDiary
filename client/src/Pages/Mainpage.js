import React, {useState} from 'react';
import NavigationBar from '../Components/NavigationBar';
import MainContent from '../Components/MainContent';
import './Mainpage.css';
import UploadColumn from '../Components/UploadColumn'
import Invitation from '../Components/Invitation'

function Mainpage ({handleLogout}) {
  
  const [globalState, setGlobalState] = useState({
    currentPage:'home'
  });

  const handleIconClick = (event) => {
    if (event.target.classList.contains('home')) {
      setGlobalState({ currentPage: 'home' });
    }
    if (event.target.classList.contains('invitation')) {
      setGlobalState({ currentPage: 'invitation' });
    }
  };
  
    return (
      <div>
        <NavigationBar handleIconClick={handleIconClick} handleLogout={()=>{handleLogout()}} />
        <MainContent/>

        {!globalState.currentPage ? (
                  'loading'
                ) : globalState.currentPage === 'home' ? (
                  <React.Fragment>
                    <div className="tweetForm__container ">
                      <div className="tweetForm__wrapper">
                        <div className="tweetForm__profile"></div>
                        <UploadColumn />
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Invitation />
                  </React.Fragment>
                )
                }
      </div>
    );
  }


export default Mainpage