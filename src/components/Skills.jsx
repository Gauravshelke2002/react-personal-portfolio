import React from "react";

export const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2 className="heading skill-heading"> <span>Skills</span></h2>

        <div class="skills-container">
          <div class="skills-box">
            <h2 class="skills-title">Web Development</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div class="skills-box">
            <h2 class="skills-title">Backend Development</h2>
            <ul>
              <li>Node.js</li>
              <li>ExpressJS</li>
              <li>JSON</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div class="skills-box">
            <h2 class="skills-title">Other Skills</h2>
            <ul>
              <li>Responsive Design</li>
              <li>Git & GitHub</li>
              <li>Problem Solving</li>
              <li>Debugging</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
