import React from 'react';
import './Hero.css';
import video1 from './video1.mov'

const Hero = () => {
  return (
    <section id='home'>
    <div className='hero'>
        <div className='container'>
        <h1>Best Beer in the world</h1>
        <h2>Some Placeholder text for the business</h2>
        </div>
        <video src={video1} className='video-bg'  autoPlay loop muted/>
    </div>
    </section>
  )
}

export default Hero