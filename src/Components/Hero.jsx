import React from "react";
import image from "../../public/hero.jpg";

const Hero = () => {
  return (
    <>
      <container>
        <div className="img">
          <div>
            <img className="image-1" src="hero.jpg" alt="" />
          </div>
        </div>
        <h1 className="hero-heading">
          Building innovative web <br /> solutions{" "}
          <span className="color_gradiant">front to back!</span>
        </h1>
        <p className="description">
          "As a versatile full-stack developer, I blend creativity <br />
          with technical skill to develop sophisticated web applications. My
          goal is to deliver seamless,
          <br /> engaging experiences by bridging the gap between design and
          functionality."
        </p>
        <div className="btns">
          <button className="btn-1"> Contact Me</button>
          <button className="btn-2"> Download Resume</button>
        </div>
        <div>
          <h5 className="experience"> EXPERIENCE WITH</h5>
        </div>
        <div className="icons text-center">
          <span className="icon">
            <i class="ri-javascript-fill"></i>
          </span>
          <span className="icon">
            <i class="ri-nodejs-line"></i>
          </span>
          <span className="icon">
            <i class="ri-html5-fill"></i>
          </span>
          <span className="icon">
            <i class="ri-css3-fill"></i>
          </span>
          <span className="icon">
            <i class="ri-reactjs-fill"></i>
          </span>
        </div>
      </container>
    </>
  );
};

export default Hero;
