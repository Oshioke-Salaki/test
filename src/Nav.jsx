import React from 'react';
import './Nav.css';
import logo from './assets/logo.png';
import google from './assets/googlelogo.png';

export default function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="auth">
        <a href="#">Login</a>
        {'/'}
        <a href="#"> Create account</a>
      </div>
      <select name="lang" id="lang">
        <option value="" disabled selected hidden>
          Select Language
        </option>
        <option value="">French</option>
        <option value="">English</option>
        <option value="">Spanish</option>
      </select>
      <h6>
        Powered by <img src={google} alt="" /> Translate
      </h6>
    </div>
  );
}
