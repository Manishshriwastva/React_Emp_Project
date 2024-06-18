import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Navv from '../../Nav/Navv';
import Pop from '../../Pop_up/Pop';
import Footer from '../../Nav/Footer';
import regbannner2 from '../../images/regbannner2.png'
import Login from './Login';


const Register = () => {
  const initialState = {
    name: '',
    email: '',
    mobile_number: '',
    states: '',
    password: '',
    repassword: ''
  };

  const [regdata, setRegData] = useState(initialState);

  useEffect(() => {
    // Function to add Bootstrap's responsive classes to the select element
    const adjustDropdownClass = () => {
      const selectElement = document.getElementById('stateSelect');
      if (selectElement) {
        if (window.innerWidth <= 576) {
          selectElement.classList.add('form-select-sm'); // Add small size class for mobile
        } else {
          selectElement.classList.remove('form-select-sm'); // Remove small size class for larger screens
        }
      }
    };

    // Call adjustDropdownClass when component mounts and on window resize
    adjustDropdownClass();
    window.addEventListener('resize', adjustDropdownClass);
    return () => {
      window.removeEventListener('resize', adjustDropdownClass);
    };
  }, []);

  const handleRegForm = (e) => {
    setRegData({ ...regdata, [e.target.name]: e.target.value });
  };

  const RegFormSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3333/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regdata)
    });
    alert('User registered successfully');
    setRegData(initialState); 
  };

  return (
    <>
    <Navv/>
    <div className="container m-4">
      <div className="row justify-content-center">
      <div className="col-md-5 d-flex justify-content-center align-items-center mb-4">
          <img
            src={regbannner2}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-4 bg-dange p-2 text-white border rounded" style={{backgroundColor:'#ffff'}}>
          <h1 className="text-center mb-4 text-dark">Register Here</h1>
          <form onSubmit={RegFormSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" value={regdata.name} name="name" placeholder="Enter Your Name" onChange={handleRegForm} required />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" value={regdata.email} name="email" placeholder="Enter your email id" onChange={handleRegForm} required />
            </div>
            <div className="mb-2">
              <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
              <input type="tel" className="form-control" value={regdata.mobile_number} name="mobile_number" placeholder="Enter your Mobile No." onChange={handleRegForm} required />
            </div>
            <div className="mb-2">
              <label htmlFor="stateSelect" className="form-label">Select a State</label>
              <select id="stateSelect" className="form-select" value={regdata.states} name="states" onChange={handleRegForm} required>
                <option value="">Select Your State</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CT">Chhattisgarh</option>
                <option value="GA">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="GA">Goa</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UT">Uttarakhand</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="WB">West Bengal</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="CH">Chandigarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="LD">Lakshadweep</option>
                <option value="PY">Puducherry</option>
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" value={regdata.password} name="password" placeholder="Enter your Password" onChange={handleRegForm} required />
            </div>
            <div className="mb-2">
              <label htmlFor="repassword" className="form-label">Re-password</label>
              <input type="password" className="form-control" value={regdata.repassword} name="repassword" placeholder="Enter your Re-password" onChange={handleRegForm} required />
            </div>
            <div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </div>
            
            <Link to='/' element={<Home/>} style={{color:'blue',marginLeft:'110px',fontSize:'18px', textDecoration:'none'}}>Go To Home Page</Link>
            <Link to='/login' element={<Login/>} style={{color:'blue',marginLeft:'10px',fontSize:'18px', textDecoration:'none'}}>| Login</Link>

          </form>
          
        </div>
        
      </div>
    </div>
    <Footer/>
    <Pop/>
    </>
  );
};

export default Register;
