import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import { Link } from 'react-router-dom';
import Home from './Home';
import Pop from '../../Pop_up/Pop';
import loginbanner from '../../images/loginbanner.png';
import Register from './Register';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginForm(e) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="login-container container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={loginbanner} alt="Login Banner" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="login-card card p-4">
            <h1 className="text-center text-primary">Login</h1>
            <form onSubmit={handleLoginForm}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-secondary">Email id</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-secondary">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100 mb-4 ">Login</button>
              <p className='text-dark' style={{cursor:'pointer', fontStyle:'italic'}}>Forget Password</p>

            </form>
            <div className='d-flex ' >
              <Link to="/register" element={<Register/>} style={{ cursor: 'pointer', marginLeft:'30px' }} className="text-primary ">
                Sign up for login
              </Link>
              <span role="presentation" aria-hidden="true" className="invisible"> ...... </span>
              <Link to='/' element={<Home />} className='text-primary '>Go To Home Page</Link>
            </div>
          </div>
        </div>
      </div>
      <Pop />
    </div>
  );
}

export default Login;
