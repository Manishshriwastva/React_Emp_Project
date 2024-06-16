import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import { Link } from 'react-router-dom';
import Home from './Home';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handeLoginForm (e){
      e.preventDefault()
      console.log(email)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="text-center">Login</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email id</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter your Email id" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Enter Your Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-dark w-100" onClick={handeLoginForm}>Login</button>
        <Link to='/' element={<Home/>} className='gotohome'>Go To Home Page</Link>

      </div>
    </div>
  );
}

export default Login;
