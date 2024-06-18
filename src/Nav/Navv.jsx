import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Offernav from '../offer/Offernav';
import logo from '../images/logo.png'


const Navv = () => {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <>
     <Offernav/>
{/* ----------------------Offer Nav------------------------------------------ */}

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top  bg-dar" style={{backgroundColor:'#5eafbd', width:'100%',position:'relative'}}>
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}><img src={logo} style={{height:'50px',width:'50px',margin:'0',padding:'0'}} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/contact" onClick={handleNavLinkClick}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/about" onClick={handleNavLinkClick}>About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item " to='/mern' href="#" onClick={handleNavLinkClick}>Mern</Link></li>
                  <li><Link className="dropdown-item " to='/mean' href="#" onClick={handleNavLinkClick}>Mean</Link></li>                 
                  <li><Link className="dropdown-item " to='/java' href="#" onClick={handleNavLinkClick}>Java</Link></li>  
                  <li><Link className="dropdown-item " to='/python' href="#" onClick={handleNavLinkClick}>Python</Link></li>               
                  <li><Link className="dropdown-item " to='/sap' href="#" onClick={handleNavLinkClick}>SAP ABAP</Link></li>

                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/register" className="text-decoration-none">
                <button className="btn btn-success " type="button" onClick={handleNavLinkClick}>Register</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-danger ms-2 " type="button" onClick={handleNavLinkClick}>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navv;
