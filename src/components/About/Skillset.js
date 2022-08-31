import React from "react";
import "./Skillset.css";
import {
  DiPython,
  DiReact,
  DiNodejs,
  DiJavascript1,
  DiJava,
  DiPhp,
  DiWordpress,
  DiMongodb,
  DiGit,
  DiPostgresql,
} from "react-icons/di";

function Skillset() {
  const skillSets = [
    <DiPython />,
    <DiReact />,
    <DiNodejs />,
    <DiJavascript1 />,
    <DiJava />,
    <DiPhp />,
    <DiWordpress />,
    <DiMongodb />,
    <DiGit />,
    <DiPostgresql />,
  ];
  return (
    <div>
      <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {skillSets.map((skillSet) => (
          <div className="card">{skillSet}</div>
        ))}
      </div>
    </div>
  );
}

export default Skillset;
