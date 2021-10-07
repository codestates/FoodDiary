import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import MainContent from './MainContent';
import './Mainpage.css';

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <NavigationBar/>
        <MainContent/>
      </div>
    );
  }
}


export default Mainpage