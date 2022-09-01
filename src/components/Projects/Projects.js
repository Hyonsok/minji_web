import React from "react";
import Cards from "./Cards";
import SocialFlow from "../SocialFlow";
import "./Projects.css"

function Projects() {
  return (
    <>
      <div className="body-container">
        <div className="stars-project">
          <Cards/>
          <SocialFlow/>
        </div>
      </div>
    </>
  );
}

export default Projects;
