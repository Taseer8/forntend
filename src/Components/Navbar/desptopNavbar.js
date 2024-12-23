import React from "react";
import logo from "../Images/codeant_ai_logo.jpeg";
import "./Navbar.css"

const navItems = [
  { icon: "fa-house", text: "Repositories", href: "/" },
  { icon: "fa-code", text: "AI Code Review", href: "/" },
  { icon: "fa-cloud", text: "Cloud Security", href: "/" },
  { icon: "fa-book", text: "How to Use", href: "/" },
  { icon: "fa-gear", text: "Settings", href: "/" },
  
  { icon: "fa-phone", text: "Support", href: "/" },
  { icon: "fa-right-from-bracket", text: "Logout", href: "/" },
];

export default function Navbar() {
  return (
    <>
    
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            <span className="ms-2">CodeAnt AI</span>
          </a>
        
          <button
            className="navbar-toggler d-lg-none ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleContent"
            aria-controls="navbarToggleContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

  
      <div className="collapse d-lg-none" id="navbarToggleContent">
        <div className="bg-light p-3">
         
          <select className="form-select mb-3">
            <option>Select </option>
            <option>UtkarshDhiryaPanwar</option>
          </select>
         
          <ul className="nav flex-column">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item mb-2">
                <a className="nav-link d-flex align-items-center" href={item.href}>
                  <i className={`fa-solid ${item.icon} me-2`}></i> {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

   
      <div className="d-none d-lg-block bg-light">
        <div className="container">
       
          <div className="header">
            <div className="logo">
              <img src={logo} alt="CodeAnt AI" />
              <span className="title">CodeAnt AI</span>
            </div>
          </div>
         
          <ul className="nav">
            <li className="nav-item">
              <select className="form-select">
                <option value="UtkarshDhairyaPa...">UtkarshDhairyaPa...</option>
              </select>
            </li>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link ${item.text === "Repositories" ? "active" : ""}`}
                  href={item.href}
                >
                  <i className={`fa-solid ${item.icon} me-2`}></i> {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
