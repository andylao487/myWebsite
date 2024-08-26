import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#home">Brand</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><a className="dropdown-item" href="#service1">Service 1</a></li>
              <li><a className="dropdown-item" href="#service2">Service 2</a></li>
              <li><a className="dropdown-item" href="#service3">Service 3</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#allServices">All Services</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="caseStudiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Case Studies
            </a>
            <ul className="dropdown-menu" aria-labelledby="caseStudiesDropdown">
              <li><a className="dropdown-item" href="#caseStudy1">Case Study 1</a></li>
              <li><a className="dropdown-item" href="#caseStudy2">Case Study 2</a></li>
              <li><a className="dropdown-item" href="#caseStudy3">Case Study 3</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#allCaseStudies">All Case Studies</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutUs">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">FAQ</a>
          </li>
        </ul>
        <div className="ml-auto">
          <a href="#bookCall" className="btn btn-primary">Book a Call</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
