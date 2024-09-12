import React from 'react';
import logo from '../Images/vizzweblogo.svg';
function Navbar() {
  return (
    <div className='container'>

      <nav className="navbar navbar-expand-lg navbar-light p-0 custom-navbar">
        <div className="container-fluid">
       
          <a className="navbar-brand p-0" href="/"><img className='img-fluid' src={logo} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse collapse-css" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-end">
              <li className="nav-item mx-1">
                <a className="nav-link active text-white poppins-regular" aria-current="page" href="/">TECHNOLOGIES</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link text-white poppins-regular" aria-current="page" href="/">SUCCESS STORIES</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link text-white poppins-regular" aria-current="page" href="/">SMART CONTRACTS</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link text-white" aria-current="page" href="/">TECHNOLOGY STACK</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li> */}
              
            </ul>
            <form className="d-flex justify-content-end">
              <button className="btn btn-light rounded-pill" style={{color: '#42a4f5'}} type="submit">Get Started</button>
            </form>
          </div>
        </div>
      </nav>
                </div>
  );
}

export default Navbar;