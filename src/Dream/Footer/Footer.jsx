import React from "react";
import "./Footer.Module.css"; // Add your styling here
import logo from '../../images/logo.png';
import whatsapp from '../../images/whatsapp.png';
import facebook from '../../images/faceb.png';
import youtube from '../../images/utube.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Div: Logo and Paragraph */}
      <div className="footer-section">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>
          Welcome to our website. We strive to deliver the best service to our
          customers.
        </p>
      </div>

      {/* Second Div: Quick Links */}
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="quick-links">
        <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/Gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
        </ul>
      </div>

      {/* Third Div: Head Office Address */}
      <div className="footer-section">
        <h3>Head Office</h3>
        <address>
          123 Main Street, <br />
          Cityname, Country <br />
          Phone: +123-456-7890
        </address>
      </div>

      {/* Fourth Div: Days Open and Social Media */}
      <div className="footer-section">
        <h3>Days Open</h3>
        <p>Monday to Sunday</p>
        <p>24/7 Service</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src= {facebook} alt="Logo" className="footer-logo" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src= {whatsapp} alt="Logo" className="footer-logo" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src= {youtube} alt="Logo" className="footer-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
