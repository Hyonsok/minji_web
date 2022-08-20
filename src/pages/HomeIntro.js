import React from "react";
import "./HomeIntro.css";
import Typewriter from 'typewriter-effect';


function HomeIntro(props) {
  return (
    <>
      <div className="intro__first__row">
        <div className="intro__name">
          <p className="intro__hi">
            Hi There!
            <span className="hand__emoji">👋🏻</span>
          </p>
          <div>
            <span>I'M </span>  
            <span className="developer__name">{props.name} </span>
          </div>
        </div>
          
        <div className="intro__skill">
          <div className="developer__skill">
            <Typewriter 
              options={{strings: ['A for Apple', 'B for Bird', 'C for Cat', 'D for Dog'], 
                        autoStart: true,
                        loop: true,}}
            />
          </div>
        </div>  
        <object type="image/svg+xml" data="./images/intro_main.svg" className="svg__object"></object>
      </div>

      <div className="intro__second__row">
        <div className="intro__myself">
          LET ME
          <span className="intro__word"> INTRODUCE </span>
          MYSELF
        </div>
        <div className="home__about__body">
          I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          <br></br><br></br>
          I am fluent in classics like 
            <i><b className="purple"> C++, Javascript and Python. 
          </b></i><br></br><br></br>
          My field of Interest's are building new &nbsp;
          <i><b className="purple">Web Technologies and Products </b> and also in areas related to<br></br>
              <b className="purple">Deep Learning and Natural Launguage Processing.</b></i>
          <br></br><br></br>
          Whenever possible, I also apply my passion for developing products with 
            <b className="purple"> Node.js</b> and<br></br>
            <i><b className="purple"> Modern Javascript Library and Frameworks</b></i>&nbsp; 
            like<i><b class="purple"> React.js and Next.js</b></i>
        </div>
        {/* <div className="card">
          <img src={process.env.PUBLIC_URL + "images/sample.png"}/>
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
        </div>         */}
        <div className="home-about-social col-md-12">
          <h1>FIND ME ON</h1>
          <p>Feel free to <span class="purple">connect </span>with me</p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a href="#" target="_blank" rel="noreferrer" class="icon-colour  home-social-icons"/>
            </li>
          </ul>
        </div>    
      </div>
    </>
  );
}



export default HomeIntro;
