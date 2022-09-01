import React from "react";
import HomeIntro from "../HomeIntro";
import "./Home.css";  




export default function Home() {
  return (
    <>
      <div className="stars"></div>
      <HomeIntro 
        /* Your name goes here */ 
        name="Your Name" 
        /* Your skills goes here. This will show as an anymation. Number of skills doesn't matter */ 
        skills={["Type your skills at here", "Skills as many as you want", "You can add like this"]}
        /* Your brief card explanation */
        breifCardInfo = "Some quick example text to build on the card title and make up the bulk of the card's content."
        /* Your resume link will go here */
        resumeLink = "https://google.com" 
      />
    </>
  );
}
