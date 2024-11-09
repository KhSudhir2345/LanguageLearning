import { useState } from "react";
import { useLogin } from "../hooks/useLogin.js";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const { login,isLoading,error } = useLogin();
    const navigate=useNavigate();

    const handleSubmit=async (e) => {
      e.preventDefault();
      navigate('/language');
      // await login(userName,password);
    }


    return(
          <div className="container">
            <div className="welcome-text">Welcome Back .!</div>
            <div className="circle-large"></div>
            <div className="circle-small"></div>

            <div className="form-container">
              <div className="form-content">
                <button className="login-title">Login</button>
                <div className="input-wrapper">
                  <input className="input-field" placeholder="Username" value={userName} onChange={(e) => setUserName(userName)} disabled={isLoading}/>
                </div>
                <div className="password-wrapper">
                  <input className="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(password)} disabled={isLoading}/>
                  <div className="eye-icon"></div>
                </div>
                <div className="remember-me">
                  <div className="checkbox"></div>
                  <button className="remember-text">Remember me</button>
                </div>
                <div className="login-button-container">
                  <button className="login-button" onClick={handleSubmit}>Login</button>
                  <button className="forgot-password">Forgot password ?</button>
                </div>
              </div>

              <div className="divider">
                <div className="line"></div>
                <div className="divider-text">Or</div>
                <div className="line"></div>
              </div>

              <div className="social-icons">
                <div className="icon google"></div>
                <div className="icon facebook"></div>
                <div className="icon apple"></div>
              </div>

              <button className="signup">Don’t have an account? Signup</button>
              <div className="footer-links">
                <button className="footer-link">Terms & Conditions</button>
                <button className="footer-link">Support</button>
                <button className="footer-link">Customer Care</button>
              </div>
            </div>
        {error && <div classNameName="error">{error}</div>}
      </div>
      );
}

export default Login;