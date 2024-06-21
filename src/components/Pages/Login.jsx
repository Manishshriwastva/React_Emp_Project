import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import loginbanner from "../../images/loginbanner.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.toLowerCase() }); // Convert email to lowercase
  };

  const navigate = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.error("Please enter both email and password", {
        autoClose: 1000,
        position: "top-center"
      });
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3333/users`);
      const result = res.data;

      if (result.length === 0) {
        toast.error("No users found", {
          autoClose: 1000,
          position: "top-center"
        });
        return;
      }

      // Convert input email to lowercase
      const lowercaseEmail = user.email.toLowerCase();

      // Find user with case-insensitive email
      const foundUser = result.find((r) => r.email.toLowerCase() === lowercaseEmail);

      if (!foundUser) {
        toast.error("User not found", {
          autoClose: 1000,
          position: "top-center"
        });
        return;
      }

      if (foundUser.password !== user.password) {
        toast.error("Incorrect password", {
          autoClose: 1000,
          position: "top-center"
        });
        return;
      }

      // Store user data in localStorage
      localStorage.setItem('auth', JSON.stringify(foundUser));

      toast.success("Login Successful", {
        autoClose: 1000,
        position: "top-center"
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (error) {
      console.error("Error connecting to the server:", error);
      toast.error("Login failed. Unable to connect to the server.", {
        autoClose: 1000,
        position: "top-center"
      });
    }
  };

  return (
    <div className="login-container container d-flex align-items-center justify-content-center vh-100">
      <ToastContainer /> {/* Ensure ToastContainer is placed here */}
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={loginbanner} alt="Login Banner" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="login-card card p-4">
            <h1 className="text-center text-primary">Login</h1>
            <form onSubmit={handleLoginForm}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-secondary">
                  Email id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your Email id"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-secondary">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-4">
                Login
              </button>
              <p
                className="text-primary"
                style={{ cursor: "pointer", fontStyle: "italic" }}
              >
                Forget Password
              </p>
              <p>
                If you are not registered!{" "}
                <Link to="/register">Register Here</Link>
              </p>
            </form>
            <div className="d-flex">
              <span
                role="presentation"
                aria-hidden="true"
                className="invisible"
              >
                {" "}
                ......{" "}
              </span>
              <Link to="/" className="text-primary gotohome">
                Go To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
