import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./SocialFlow.css"


function SocialFlow(props) {
  return (
    <div>
      <p className="social-container">
        
        {/* LinkedIn */}
        <a href={props.linkedin} className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        {/* GitHub */}
        <a href={props.github} className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        {/* Facebook */}
        <a href={props.facebook} className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        {/* Instagram */}
        <a href={props.instagram} className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        
        {/* Twitter */}
        <a href={props.twitter} className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
  );
}

export default SocialFlow;