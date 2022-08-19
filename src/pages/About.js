import React from 'react';
import GithubActivity from '../components/GithubActivity';
import Skillset from '../components/Skillset';
import Tool from '../components/Tool';
function About() {
    
  return (
    <div className='about-container'>
        <Skillset/>
        <br/>
        <Tool />
        <br/>
        <br/>
        <GithubActivity/>
    </div>
  );
}

export default About;