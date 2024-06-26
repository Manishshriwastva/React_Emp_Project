import React from 'react'
import { Link } from 'react-router-dom'
import Mean from '../course/Mean'

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 bulbtext">
                <i className="fas fa-lightbulb-o me-2 fs-3 bulb"></i>Carrer Skills
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Courses
              </h6>
              <p>
                <Link to='/mean' element={<Mean/>} className="text-reset">Mean</Link>
              </p>
              <p>
                <a href="#!" className="text-reset">Mern</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Java</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Python</a>
              </p>
              <p>
                <a href="#!" className="text-reset">SAP</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Noida sc-15, C-78 2nd f, UP</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                Manishshriwastva@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 91 9123153528</p>
              <p><i className="fas fa-print me-3"></i> + 91 9453295230</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright--
        <a className="text-reset fw-bold" href="">www.carrerskills.com</a>
      </div>
    </footer>
      
    </div>
  )
}

export default Footer
