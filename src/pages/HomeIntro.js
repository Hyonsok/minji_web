import React from "react";
import "./HomeIntro.css";
import Typewriter from 'typewriter-effect';


function HomeIntro(props) {
  return (
    <div className="intro__first__row">
      <div className="introduction">
        <div>
          Hi There!
        </div>
        <div>
          <span>I'M </span>  
          <span className="developer__name">{props.name} </span>
          <span className="hand__emoji">👋🏻</span>
        </div>
        
        <div className="developer__skill">
          <br></br>
          <Typewriter 
            options={{strings: ['A for Apple', 'B for Bird', 'C for Cat', 'D for Dog'], 
                      autoStart: true,
                      loop: true,}}
          />
        </div>
        <div>
          <img classNamee="mainImg" src="./images/intro_main.svg" alt="home pic"/>  
        </div>     
      </div>
    </div>
  );
}



export default HomeIntro;
