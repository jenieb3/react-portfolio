import React from 'react';
import myImage from '../assets/profile-pic.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={myImage} alt="Jenelle Spio-Garbrah" className="profile-image" />
      </div>
      <div className="text-container">
        <h1 className='quote'>Jenelle Spio-Garbrah</h1>
        <p>"Everything is designed. Few things are designed well." -- Brian Reed</p>
        
        <h2 className='quote'>About Me</h2>
        <p>I am a lover of life and learning. I do enjoy a good challenge that provokes analytical thinking and problem solving. Also, I like interacting with nature as I draw inspiration, from the wonderful world around us.</p>
      </div>
    </div>
  );
}

export default Home;