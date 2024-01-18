import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import './Login.css'; // Import your CSS file


function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}login`,
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("userid", data.user._id);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("first_name", data.user.first_name);
      localStorage.setItem("last_name", data.user.last_name);
      if(data.user.role=='admin') navigate("/dashboard");
      else  navigate("/resources");
      window.location.reload(true);
    } catch (error) {
      alert(error);
    }
  };

  // jwt validation

  const [cookies, setCookies] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (cookies.jwt) {
        navigate("/home");
      } else {
        navigate("/");
      }
    };
    verifyUser();
  }, [cookies, navigate]);

  return (
    <div className="loginBox">
        <h3>Sign In</h3>
        <p>No account yet? <a href="" className="signup">Sign up</a> in seconds.</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputBox">
            <div>
              <input
                placeholder="Email Address"
                id="uname"
                type="email"
                name="email"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}/>
            </div>
            <div>
              <input
                placeholder="Password"
                id="pass"
                type="password"
                name="password"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
            </div>
            <div>
                <div style={{float:"left"}}><input type="checkbox" className="forgot_chkbox"/> Remember</div> 
                <div style={{float:"right"}}>Forgot</div>
            </div>
            <div className="login-btn">
              <input type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
  );
}

export default Login;
