import React from 'react';
import GithubActivity from '../components/GithubActivity';
import Skillset from '../components/Skillset';
import Tool from '../components/Tool';
function About() {
    
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='about-container'>
        <div className='about-wrapper'>
          <div className='row'>
            <h3 className='about-heading' stlye={{fontSize: "2.1em", paddingBottom: "20px"}}>Know What I'M</h3>
            <br/>
            <h5>Hi Everyone, I am Your Name from City, Country.<br/>
      I am a junior pursuing IMSC in Maths and Computing in Your School.</h5><br/>
            <h5>Apart from coding, some other activities that I love to do!</h5><br/>
            <ul>
              <li>Playing Games</li>
              <li>Writting Tech Blogs</li>
              <li>Travelling</li>
            </ul>
            <div>
            <img 
              src='./images/about.png' 
              alt="" 
              style={{
                width: '30%',
                display: 'flex',
                float: 'right'
            }}/>
            </div>
          </div>
        </div>
      </div>
          <Skillset/>
          <br/>
          <Tool />
          <br/>
          <br/>
          <div stlye={{justifyContent: "center", paddingBottom: "10px"}}>
          <GithubActivity/>
          </div>
    </div>
  );
}

export default About;