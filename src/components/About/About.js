import React from "react";
import Skillset from "./Skillset";
import Tool from "./Tool";
import "./About.css";
import SocialFlow from "../SocialFlow";

function Projects() {
  return (
    <>
      <div className="about-body-container">
        <div className="stars-about">
          <div className="about-container">
            {/* <div className='contact-container' style={{justifyContent: "center", padding: "10px"}}> */}
            <div className="text">
              <h1>About Me!</h1>
              <p className="hide">
                I am a Software Developer located in Vancouver, Canada.
                <br />I am passionate about web development.
                <br />
                Thank you!
                <br />
              </p>
            </div>
            <h1>Professional Skillset</h1>
            <Skillset />
            <br />
            <h1>Tools I used</h1>
            <Tool />
            <br />
          </div>
          <div style={{ justifyContent: "center", paddingLeft: "350px" }}>
            <br />
          </div>
          <SocialFlow style={{ paddingLeft: "50%" }} />
        </div> 
      </div>
    </>
  );
}

export default Projects;
