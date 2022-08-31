import React from "react";
// import "./Tool.css";
import { DiLinux, DiLaravel, DiPhotoshop, DiVisualstudio } from "react-icons/di";
import { SiPostman } from "react-icons/si";
function Tool() {
  const tools = [<DiLinux />, <DiLaravel />, <DiPhotoshop />, <DiVisualstudio />, <SiPostman />];
  return (
    <div>
      <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {tools.map((tool) => (
          <div className="card">{tool}</div>
        ))}
      </div>
    </div>
  );
}

export default Tool;
