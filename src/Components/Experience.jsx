import React from "react";

const Experience = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="heading-3">EXPERIENCE</h2>
          <div className="exp-head d-flex justify-content-between">
            <div>
              <div className="exp-desc">
                <div>
                  <span className="exp-icon">
                    <i class="ri-microsoft-loop-fill"></i>
                  </span>
                </div>
                <div>
                  <h3 className="icon-des text-white fw-bold">
                    Full Stack Web Developer At Ticer{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="exp-date">
              <p>Feb-2024 - Present</p>
            </div>
          </div>
          <p exp>
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </div>
      </div>
    </>
  );
};
export default Experience;
