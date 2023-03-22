import React from 'react';
import myImage from '../assets/profile-pic.jpg';

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
        <p>My motto: I am a lover of life and learning.</p>
        <p>I'm a front-end developer based in London. I have a background in teaching and biology, but I discovered my passion for coding a few years ago and I haven't looked back since. I love using technology to solve problems and make the world a better place.

          When I'm not coding, you can usually find me enjoying nature, listening to music, cooking up a storm in the kitchen, or planning my next travel adventure. I'm particularly passionate about environmental conservation and I believe that technology can play a huge role in protecting our planet for future generations.

          In my spare time, I also run a coding club at a local primary school, where I share my love of coding with the next generation of developers. I believe that everyone should have access to technology and I'm committed to promoting diversity and inclusion in the tech industry.

          Thanks for taking the time to visit my portfolio! If you'd like to chat about a project or collaboration, please don't hesitate to get in touch. </p>

       
      </div>
    </div>
  );
}

export default Home;