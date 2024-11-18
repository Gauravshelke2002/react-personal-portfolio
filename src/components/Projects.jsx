import React from "react";
import project1_img from "../assets/project-1.jpg";
import project2_img from "../assets/project-2.jpg";
import project3_img from "../assets/project-3.png";
import project4_img from "../assets/project-4.jpg";

export const Projects = () => {
  const handleClick = () => {
    window.open("https://github.com/Gauravshelke2002/node-furniture-ecommerce", '_blank');
  };
  const handleClick2 = () => {
    window.open("https://github.com/Gauravshelke2002/swasthya-hospital-nodejs", '_blank');
  };
  const handleClick3 = () => {
    window.open("https://github.com/Gauravshelke2002/Rest_country_api_javascript", '_blank');
  };
  const handleClick4 = () => {
    window.open("https://github.com/Gauravshelke2002/Newsapp_project_react", '_blank');
  };
  const onhandleClick = () => {
    window.open("https://youtu.be/7Myd1PlOmA4?si=U1et_MX4uWMA_inb", '_blank');
  };
 
  const onhandleClick2 = () => {
    window.open("https://youtu.be/9C1sj0-kJJk?si=zhw_yrX9ra0h6dQp", '_blank');
  };
 
  const onhandleClick3 = () => {
    window.open("https://rest-country-api-javascript.vercel.app/", '_blank');
  };
 
  const onhandleClick4 = () => {
    window.open("https://youtu.be/0fP7XwYJsK4?si=S1ygR6jortZ-VxxY", '_blank');
  };
 
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="heading project-heading"><span>Projects</span> </h2>
        <div className="project-container">
          <div className="project-box">
            <div className="img-con">
              <img src={project1_img} alt="" />
            </div>
            <h2 class="project-title">Node-Furniture-Ecommerce</h2>
            <div class="btn-container">
              <button class="btn btn-color-2 project-btn" onClick={handleClick}>Github</button>
              <button class="btn btn-color-2 project-btn " onClick={onhandleClick}>Video</button>
            </div>
          </div>
          <div className="project-box">
            <div className="img-con">
              <img src={project2_img} alt="" />
            </div>
            <h2 class="project-title">Swasthya Hospital - Node.js</h2>
            <div class="btn-container">
              <button class="btn btn-color-2 project-btn" onClick={handleClick2}>Github</button>
              <button class="btn btn-color-2 project-btn" onClick={onhandleClick2}>Video</button>
            </div>
          </div>
          <div className="project-box">
            <div className="img-con">
              <img src={project3_img} alt="" />
            </div>
            <h2 class="project-title">Rest Country API JavaScript</h2>
            <div class="btn-container">
              <button class="btn btn-color-2 project-btn" onClick={handleClick3}>Github</button>
              <button class="btn btn-color-2 project-btn" onClick={onhandleClick3}>Live Demo</button>
            </div>
          </div>
          <div className="project-box">
            <div className="img-con">
              <img src={project4_img} alt="" />
            </div>
            <h2 class="project-title">NewsApp Project in React</h2>
            <div class="btn-container">
              <button class="btn btn-color-2 project-btn"  onClick={handleClick4}>Github</button>
              <button class="btn btn-color-2 project-btn"  onClick={onhandleClick4}>Video</button>
            </div>
          </div>



          
        </div>
      </section>
    </>
  );
};
