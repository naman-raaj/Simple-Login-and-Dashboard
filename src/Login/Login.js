import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import logo from "../wlcm.jpg";
import logo2 from "../fb.png";
import logo3 from "../ggle.png";
import logo4 from "../twitter.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Done");
    }
  };
  const validate = () => {
    const error = {};
    if (!email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is not valid";
    } else {
      error.email = "";
      navigate("/homepage");
    }

    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 8) {
      error.email = "Password is not valid.It should be minimum of 8 length";
    } else {
      error.email = "";
    }
    return error;
  };

  return (
    <div className="part fluid-container">
      <div className="part2">
        <div className="outerdiv">
          <div className="imgdiv">
            <img className="imgg" src={logo} />
          </div>
          <div className="logindiv">
            <p className="header">Login</p>
            <span className="login-text">Please login to continue</span>
            <form className="formm" onSubmit={handleSubmit}>
              <input
                className="inp"
                type="email"
                placeholder="Enter your mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="error"> {errors.email}</div>}
              <input
                className="inp"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="error"> {errors.password}</div>
              )}
              <div className="abc">
                <div>
                  <input type="checkbox" />
                  <span className="log">Keep me logged In</span>
                </div>
                <a href="#" className="forgotpass">
                  Forgot Password
                </a>
              </div>

              <button className="login-but">Login</button>
            </form>
            <span className="ran-text">or</span>
            <span className="ran-text">Login With</span>
            <div className="img-div">
              <img className="im" src={logo2} />
              <img className="im" src={logo3} />
              <img className="im" src={logo4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
