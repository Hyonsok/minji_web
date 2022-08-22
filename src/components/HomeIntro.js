import React from "react";
import "./HomeIntro.css";
import SocialFlow from "./SocialFlow";
import Typewriter from 'typewriter-effect';
import { Card, Button } from 'react-bootstrap';


function HomeIntro(props) {
  return (
    <>
      <div className="intro__first__row">
        <div className="intro__first__box">
          <div className="intro__name">
            <p>Hi There!<span className="hand__emoji">👋🏻</span></p>
            <p>I'M <span className="developer__name">{props.name} </span></p> 
          </div>
            
          <div className="intro__skill">
            <div className="developer__skill">
              <Typewriter options={{strings: props.skills, autoStart: true, loop: true,}}/>
            </div> 
          </div> 
        </div>
      </div>

      <object type="image/svg+xml" data="./images/intro_main.svg" className="svg__object"></object> 


      <div className="intro__second__row">
        <div className="intro__second__box">
          <div className="intro__myself">
            <p>LET ME <span className="intro__word"> INTRODUCE </span> MYSELF</p>
          </div>
          <div className="intro__card">
            <Card style={{ width: '18rem', alignItems: 'center', color: '#D34BFD', fontWeight: '800'}}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "images/sample.png"} />
              <Card.Body>
                <Card.Title style={{fontSize:'2rem', fontWeight:'800'}}>Card Title</Card.Title>
                <Card.Text>{props.breifCardInfo}</Card.Text>
                <Button href={props.resumeLink} style={{background: '#D34BFD', fontSize:'1.3rem', fontWeight:'800', border:'white', marginLeft:'57%'}}>Resume</Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className="home__about__body">
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            <br></br><br></br>
            
            I am fluent in classics like
            <i><b className="purple"> C++, Javascript and Python.</b></i>
            <br></br><br></br>

            My field of Interest's are building new &nbsp;
            <i><b className="purple">Web Technologies and Products </b> and also in areas related to
              <b className="purple"> Deep Learning and Natural Launguage Processing.</b></i>
            <br></br><br></br>
            
            Whenever possible, I also apply my passion for developing products with 
            <b className="purple"> Node.js</b> and<br></br>
              <i><b className="purple"> Modern Javascript Library and Frameworks</b></i>&nbsp; 
              like<i><b class="purple"> React.js and Next.js</b></i>
          </div>
        </div>


        <div className="social__box">
          <p>FIND ME ON</p>
          <div className="social__icon">
            <SocialFlow 
              linkedin={props.linkedin}
              github={props.github}
              facebook={props.facebook}
              instagram={props.instagram}
              twitter={props.twitter}
            />
          </div>     
          <p>Feel free to <span class="purple">connect </span>with me</p>
        </div>
      </div>
    </>
  );
}



export default HomeIntro;
