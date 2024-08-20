import React from "react";
import image from "../../public/Project1.jpg";
import image2 from "../../public/project2.jpg";
import 'aos/dist/aos.css'
import aos from 'aos'

const Projects = () => {
  return (
    <>
    <div data-aos="zoom-in-up">
      <div className="container "  >
        <h2 className="heading-2">PROJECTS</h2>
        <div className="row justify-content-center pointer">
          <div className="col-md-6">
            <div class="card border-0 pointer rounded">
              <img src="Project1.jpg" class="card-img-top img-fluid"  alt="..." />
              <div class="card-body bg-dark text-white rounded-bottom">
               
                <p class="card-text">
                 CLICK HERE TO VISIT
                </p>
                <h5 class="card-title">Project 1</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div class="card border-0 pointer rounded">
              <img src="project2.jpg" class="card-img-top img-fluid"  alt="..." />
              <div class="card-body bg-dark text-white rounded-bottom">
               
                <p class="card-text">
                 CLICK HERE TO VISIT
                </p>
                <h5 class="card-title">Project 2</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
