import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import './MainContent.css';
import FriendsBar from './FriendsBar';
import Feeds from './Feeds';


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
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
              <Grid item xs={2}>
                  
              </Grid>
              <Grid item xs={2}>
                  
              </Grid>
          </Grid>
      </div>
    );
  }
}


export default MainContent