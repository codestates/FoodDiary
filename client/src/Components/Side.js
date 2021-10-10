
import React from 'react';
import UploadColumn from './UploadColumn';
import Invitation from './Invitation';

function Side ({globalState}) {

    return (<div>{!globalState.currentPage ? (
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
}</div>)
 
}

export default Side;