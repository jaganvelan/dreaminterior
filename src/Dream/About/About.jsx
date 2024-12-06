import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.Module.css";
import aboutImage from "../../images/cuboard13.jpg"; // Replace with your actual image path
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
const About = () => {
  const navigate = useNavigate();

  // State for counting animation
  const [experience, setExperience]=useState(0);
  const [projects, setProjects] = useState(0);
  const [customer, setCustomer] = useState(0);

  // Animation for numbers (Experience & Projects)
  useEffect(() => {
    let expInterval, projInterval,custInterval;

    // Increment Experience
    expInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev < 15) return prev + 1;
        clearInterval(expInterval);
        return 15;
      });
    }, 100);

    // Increment Projects
    projInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 50) return prev + 1;
        clearInterval(projInterval);
        return 50;
      });
    }, 50);

    custInterval = setInterval(() => {
        setCustomer((prev) => {
          if (prev < 300) return prev + 10;
          clearInterval(custInterval);
          return 300;
        });
      }, 50);

    return () => {
      clearInterval(expInterval);
      clearInterval(projInterval);
      clearInterval(custInterval);
    };
  }, []);

  return (
    <div className="about-page">
      {/* Section 1: About Us */}
      <div className="about-section">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Dream Interior, we specialize in creating high-quality, elegant, and innovative interiors tailored to your needs. With over a decade of expertise, our team ensures perfection in every detail.
          </p>
          <button onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>

      {/* Section 2: Experience & Projects */}
      <div className="stats-section">
        <div className="stats-item">
          <h3>{experience}+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stats-item">
          <h3>{projects}+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stats-item">
          <h3>{customer}+</h3>
          <p>customers</p>
        </div>
      </div>

      {/* Section 3: Why Choose Us */}
      <div className="choose-us-section">
        <h2>Why Choose Us?</h2>
        <button onClick={() => navigate("/services")}>Go to Services</button>
      </div>

      {/* Section 4: Features */}
      <div className="features-section">
        <div className="feature-item">
          <img src={icon1} alt="icon1" />
          <h3>Fast Building</h3>
          <p>We deliver projects on time without compromising quality.</p>
        </div>
        <div className="feature-item">
        <img src={icon2} alt="icon1" />
          <h3>Smartly Execute</h3>
          <p>Our team employs the latest techniques for impeccable results.</p>
        </div>
        <div className="feature-item">
        <img src={icon3} alt="icon1" />
          <h3>Carefully Planned</h3>
          <p>Every project is meticulously planned to meet your needs.</p>
        </div>
        <div className="feature-item">
        <img src={icon4} alt="icon1" />
          <h3>Perfect Design</h3>
          <p>We provide stunning and functional designs to match your vision.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
