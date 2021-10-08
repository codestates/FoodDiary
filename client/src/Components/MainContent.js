import React from 'react';
import Grid from '@mui/material/Grid';
import './MainContent.css';
import FriendsBar from './FriendsBar';
import Feeds from './Feeds';
import Upload from './UploadColumn';


function MainContent () {

    return (
      <div>
          <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={6}>
                  <div>
                    <FriendsBar/>
                    <Feeds/>
                  </div>
              </Grid>
          </Grid>
      </div>
    );
  }


export default MainContent