import React from "react";
import "./Skillset.css";
import { DiPython, DiReact, DiNodejs, DiJavascript1, DiJava } from "react-icons/di";
import { DiPhp, DiWordpress, DiMongodb, DiGit, DiPostgresql } from "react-icons/di";

function Skillset() {
  return (
    <div>
      <h1 className="skillset-heading">Professional Skillset</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <DiReact />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <DiNodejs />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <DiJavascript1 />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <DiJava />
          </div>
        </div>
        <div class="column">
          <div class="card">
            <DiPython />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <DiWordpress />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <DiPhp />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <DiMongodb />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <DiGit />
          </div>
        </div>
        <div class="column">
          <div class="card">
            <DiPostgresql />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
