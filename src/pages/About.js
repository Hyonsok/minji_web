import React from 'react';
import Skillset from '../components/Skillset';
import Tool from '../components/Tool';
import GithubActivity from '../components/GithubActivity';

import './About.css'
function Projects() {
  return (
    <div className='about-container'>
        <Skillset/>
        <br/>
        <Tool />
        <GithubActivity/>
    </div>
  );
}

export default Projects;