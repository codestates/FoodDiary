import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import MainContent from '../Components/MainContent';
import './Mainpage.css';

function Mainpage () {
  
  // const [globalState, setGlobalState] = useState({
  //   currentPage: 'upload',
  // });
  
    return (
      <div>
        <NavigationBar />
        <MainContent/>
      </div>
    );
  }


export default Mainpage