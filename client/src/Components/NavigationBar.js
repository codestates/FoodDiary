import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import foodDiary_logo from '../images/Food_Diary_Hori.png';
import home from '../images/home.svg';
import friends from '../images/love.svg';
import invitation from '../images/find.svg';
import Avatar from '@mui/material/Avatar';
import profile from '../images/pp1.png';
import './NavigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      }
      render() {
        return (
          <div>
              <div className="navibar_contents">
              <Grid container>
                    <Grid item xs={2}>
                        
                    </Grid>
                    <Grid item xs={3}>
                        <img className="navibar_logo" src={foodDiary_logo} alt="food diary logo" width="168px"/>
                    </Grid>
                    <Grid item xs={3}>
                        <input  className="navibar_searchBar" text="text" placeholder="Search"/>
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="navibar_img" src={home} alt="home icon" width="25px"/>
                        <img className="navibar_img" src={friends} alt="friends icon" width="25px"/>
                        <img className="navibar_img" src={invitation} alt="invitation icon" width="25px"/>
                        <Avatar className="navibar_img" src={profile} style={{"maxWidth":"25px", "maxHeight":"25px"}}></Avatar>
                    </Grid>
                    <Grid item xs={1}></Grid>
              </Grid>
              </div>
          </div>
        );
      }
    }
    
    
    export default NavigationBar