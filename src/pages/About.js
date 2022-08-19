import React from 'react';
import Row from 'react-bootstrap/Row'
import { DiReact } from "react-icons/di"
import { DiNodejs } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { DiJava } from "react-icons/di"
import Calendar from 'react-github-contribution-calendar';
import './About.css'

<link rel="stylesheet" href="node_modules/react-github-contribution-calendar/default.css" type="text/css" />
function Projects() {
    var values = {
        '2022-06-23': 1,
        '2022-06-26': 2,
        '2022-06-27': 3,
        '2022-06-28': 4,
        '2022-06-29': 4
      }
      var until = '2022-06-30';
      var panelColors = [
        '#EEEEEE',
        '#F78A23',
        '#F87D09',
        '#AC5808',
        '#7B3F06'
      ]
      var weekNames = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
    var monthNames = [
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan',
        'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
    ];
    
  return (
    <div className='about-container'>
<<<<<<< Updated upstream
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
        <Row>
        <Calendar
        values={values} until={until} panelColors={panelColors}
        weekNames={weekNames} monthNames={monthNames}/> 
        </Row>
=======
        <Skillset/>
        <br/>
        <Tool />
        <br/>
        <br/>
        <GithubActivity/>
>>>>>>> Stashed changes
    </div>
  );
}

export default Projects;