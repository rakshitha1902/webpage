import React, { useState } from 'react';
import ControlledCarousel from '../components/ControlledCarousal';
import Posts from '../components/Posts';

const Home = () => {
  return (    
    <div>
      <ControlledCarousel/>
      <br/>
      <Posts/>
    </div>
  );
};




export default Home;