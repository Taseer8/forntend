import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Images/codeant_ai_logo.jpeg";
import pie from "../Images/pie-chart.png";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="register">
      <div className="register-poster">
        <div className="right-component">
          <div className="img">
            <img src={logo} alt="" className="" />
            <h4>Ai to Detect & Autofix Bad Code</h4>
          </div>
          <div className="right-2">
            <div className="complate-1">
              <h3>30+</h3>
              <h5>Language Support</h5>
            </div>
            <div className="complate-1">
              <h3>10K+</h3>
              <h5>Developers</h5>
            </div>
            <div className="complate-1">
              <h3>100K+</h3>
              <h5>Hours Saved</h5>
            </div>
          </div>
        </div>
        <div className="comp-2">
          <div className="comp2-content">
            <div className="cont-21">
              <img src={pie} alt="" />
              <p className="">Issues Fixed</p>
              <h6 className="">500K+</h6>
            </div>
            <div className="cont-22">
              <i className="fa-solid fa-arrow-up">14%</i>
              <i><span>This week</span></i>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="regiter-left">
        <div className="form-register">
          <div className="register-right">
            <div className="img">
              <img src={logo} alt="" className="" />
              <h3 className="h3">CodeAnt AI</h3>
            </div>
            <div className="welcom">
              <div className="wel-cont">
                <h5>Welcome to CodeAnt AI</h5>
              </div>
              <div className="wel-btn">
                <button
                  className="active btn-1"
                  onClick={() => handleNavigation('/register')}
                >
                  SAAS
                </button>
                <button
                  className="btn-2"
                  onClick={() => handleNavigation('/self')}
                >
                  Self Hosted
                </button>
              </div>
              <hr />
              <div className="form">
                <div className="form-1">
                  <i className="fa-brands fa-github" id="git"></i>
                  Sign in with Github
                </div>
                <div className="form-1">
                  <i className="fa-brands fa-bitbucket" id="bitbucket"></i>
                  Sign in with Bitbucket
                </div>
                <div className="form-1">
                  <i className="fa-brands fa-vimeo" id="azure"></i>
                  Sign in with Azure Devops
                </div>
                <div className="form-1">
                  <i className="fa-brands fa-gitlab" id="gitlab"></i>
                  Sign in with GitLab
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">By signing up you agree to the <b>Privacy Policy.</b></div>
      </div>
    </div>
  );
}
