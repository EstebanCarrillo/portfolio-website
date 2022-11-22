import React from 'react'
import {motion} from 'framer-motion';

import {AppWrap} from '../../wrapper';
import {images} from '../../constants';
import './Home.scss';

const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}

const Home = () => {
  return (
    <div  className='app__home app__flex'>
      <motion.div
      whileInView={{x:[-100,0], opacity: [0,1]}}
      transition={{duration: 1}}
      className="app__home-info">
        <div className='app__home-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, my name is</p>
              <h1 className='head-text'>Jose </h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web & Mobile App </p>
            <p className='p-text'>Developer</p>
          </div>
        </div>

        
      </motion.div>
      <motion.div whileInView={{y:[100,0], opacity: [0,1]}}
      transition={{duration: 1,delayChildren:0.5}}
      className="app__home-img">
      <div className='app__home-about'>
        <div>
        <img src={images.profile} alt="profile_bg"></img>
        <div className='title-cmp app__flex'>
        
            <h1 className='head-text'>About Me</h1>
          </div>
          <div className='desc-cmp app__flex'>
            
            <p className='p-text'>I am a Computer Engineering graduate who has a passion for designing and building websites and mobile applications.
            I specialize in using technologies like React, Node, and Flutter to design and engineer applications that I am proud of.  <br/> <br/>Currently looking for an oppurtunity
            to use my skills and creativity for the improvement and growth of a company, as well as my personal growth. </p>
            
          </div>
          
          </div>
          </div>
          </motion.div>
          

      <motion.div
      variant={scaleVariants}
      whileInView={{x:[100,0], opacity: [0,1]}}
      className="app__home-circles"
      >

        {[images.react,images.node,images.flutter].map((circle,index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle"

            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Home, 'home');