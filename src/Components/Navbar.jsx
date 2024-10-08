import React from "react";

const Navbar = () => {
  return (
    <>
      <container>
        <nav className="navbar navbar-expand-lg d-flex ">
          <div className="container ">
            <a className="navbar-brand text-white fw-bold" href="#">
              M.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-around "
              id="navbarNav"
            >
              <ul className="navbar-nav gap-5">
                <li className="nav-item ">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    Experience
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </container>
    </>
  );
};

export default Navbar;
