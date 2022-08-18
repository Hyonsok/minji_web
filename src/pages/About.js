import React from 'react';
import Row from 'react-bootstrap/Row'
import { DiReact } from "react-icons/di"
import { DiNodejs } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { DiJava } from "react-icons/di"

import './About.css'
function Projects() {
  return (
    <div className='about-container'>
        <h3>About page</h3>
        <Row>
            <div className='tech-icons col-md-2 col-4'>
                <DiReact/>
            </div>
            <div className='tech-icons col-md-2 col-4'>
                <DiNodejs/>
            </div>
            <div className='tech-icons col-md-2 col-4'>
                <DiJavascript1/>
            </div>
            <div className='tech-icons col-md-2 col-4'>
                <DiJava/>
            </div>
        </Row>
    </div>
  );
}

export default Projects;