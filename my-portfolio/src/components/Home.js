import React from 'react';
import myImage from '../assets/profile-pic.jpg';

function Home() {
  return (
    <div>
      <h1>Jenelle Spio-Garbrah</h1>
      <img src={myImage} alt="Jenelle Spio-Garbrah" />
      <p>"Everything is designed. Few things are designed well." -- Brian Reed</p>
      <h2>Welcome to SpioDesigns</h2>
      <h2>About Me</h2>
      <p>I am a lover of life and learning. I do enjoy a good challenge that provokes analytical thinking and problem solving. Also, I like interacting with nature as I draw inspiration, from the wonderful world around us.</p>
    </div>
  );
}

export default Home;
