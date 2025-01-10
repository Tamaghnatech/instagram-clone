import React from 'react'
import "./Homepage.css"
import Sidenav from './navigation/Sidenav';
import Tomeline from './tomeline/Tomeline';


function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
        <Sidenav />
        </div>
        <div className='homepage__timeline'>
        <Tomeline />
        </div>
    </div>
  )
}

export default Homepage;
