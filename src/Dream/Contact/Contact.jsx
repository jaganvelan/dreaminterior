import React from "react";
import "./Contact.Module.css";
import mapIcon from "../../images/map.png"; // Replace with your actual map icon image path
import phoneIcon from "../../images/mobile.png"; // Replace with your actual phone icon image path
import gmailIcon from "../../images/gmail.png"; // Replace with your actual Gmail icon image path

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Section 1: Address */}
      <div className="contact-section">
        <img src={mapIcon} alt="Map Icon" className="contact-icon" />
        <h3>Address</h3>
        <p>
          <a
            href="https://www.google.com/maps?q=123+Dream+Street,+Cityville"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Dream Street, Cityville
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps?q=456+Interior+Lane,+Townsville"
            target="_blank"
            rel="noopener noreferrer"
          >
            456 Interior Lane, Townsville
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps?q=456+Interior+Lane,+Townsville"
            target="_blank"
            rel="noopener noreferrer"
          >
            456 Interior Lane, Townsville
          </a>
        </p>
      </div>

      {/* Section 2: Phone */}
      <div className="contact-section">
        <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
        <h3>Phone</h3>
        <p>
          <p>Company PhoneNumber</p>
          <a href="tel:+1234567890">+123 456 7890</a>
        </p>
        <p>
            <p>Owner PhoneNumber</p>
          <a href="tel:+0987654321">+098 765 4321</a>
        </p>
        <p>
            <p>Manager PhoneNumber</p>
          <a href="tel:+0987654321">+098 765 4321</a>
        </p>
        <p>
            <p>Employee PhoneNumber</p>
          <a href="tel:+0987654321">+098 765 4321</a>
        </p>
      </div>

      {/* Section 3: Gmail */}
      <div className="contact-section">
        <img src={gmailIcon} alt="Gmail Icon" className="contact-icon" />
        <h3>Email</h3>
        <p>
            <p>Company Gmail</p>
          <a href="mailto:eeevjagan@gmail.com">eeevjagan@gmail.com</a>
        </p>
        <p>
            <p>Owner Gmail</p>
          <a href="mailto:prakashjack1999@gmail.com">prakashjack1999@gmail.com</a>
        </p>
        <p>
            <p>Manager Gmail</p>
          <a href="mailto:support@dreaminterior.com">support@dreaminterior.com</a>
        </p>
        <p>
            <p>Employee Gmail</p>
          <a href="mailto:support@dreaminterior.com">support@dreaminterior.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
