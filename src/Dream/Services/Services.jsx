import React ,{useState,useEffect}from "react";
import "./Services.Module.css";
import banner1 from "../../images/banr1.jpg"; // Replace with actual banner images
import banner2 from "../../images/banr2.jpg";
import banner3 from "../../images/banr3.jpg"; // Replace with actual banner images
import employee1 from "../../images/person2.png"; // Replace with employee images
import employee2 from "../../images/person3.png";
import employee3 from "../../images/person4.png";
import logo1 from "../../images/Centuryply.png"; // Replace with company logo images
import logo2 from "../../images/kajaria.png";
import logo3 from "../../images/greenply.png";
const videoList = [
 "https://www.youtube.com/embed/y7_Spedf2BI?si=rmAmRO-8QltUS9ew" ,
 "https://www.youtube.com/embed/lQ-8lv1XSRE?si=qQQFkhVyMA-rsRiu" ,
 "https://www.youtube.com/embed/r23dbCWfytU?si=yY87pOheHoAIBKRw",
 "https://www.youtube.com/embed/qCiA8GdN-0Y?si=x046haTd8jC8Dj2p"
];
const Services = () => {
  const employees = [
    { image: employee1, name: "John Doe", rating: 4.5 },
    { image: employee2, name: "Jane Smith", rating: 4.7 },
    { image: employee3, name: "Alex Johnson", rating: 4.8 },
    { image: employee1, name: "John Doe", rating: 4.5 },
    { image: employee2, name: "Jane Smith", rating: 4.7 },
    { image: employee3, name: "Alex Johnson", rating: 4.8 },
    { image: employee2, name: "Jane Smith", rating: 4.7 },
  ];

  const companies = [logo1, logo2, logo3,logo1, logo2, logo3,logo1, logo2, logo3];

  const banners = [banner1, banner2, banner3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="services-page">
    {/* Section 1: Banner Slider */}
    <div className="banner-slider">
      {banners.map((banner, index) => (
        <div
          className={`slide ${index === currentSlide ? "active" : "inactive"}`}
          key={index}
        >
          <img src={banner} alt={`Banner ${index + 1}`} />
        </div>
      ))}
      {/* Dots for Slide Navigation */}
      <div className="dots">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active-dot" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
      {/* Section 2: Video */}
      <div className="video-container">
      <h1>Watch Our Videos</h1>
      <div className="video-list">
        {videoList.map((videoList, index) => (
          <div key={index} className="video-item">
            <iframe
              src={videoList}
              title={`YouTube video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>

      {/* Section 3: Employee Cards */}
      
      <div className="employee-section">
      <div><h1 style={{color:"#007bff",fontSize:"30px"}}>Employees Rating</h1></div>
      <div className="employee-section1">
        {employees.map((employee, index) => (
          <div className="employee-card" key={index}>
            <div className="employee-image">
              <img src={employee.image} alt={employee.name} />
            </div>
            <h4>{employee.name}</h4>
            <p>⭐ {employee.rating}</p>
          </div>
        ))}
      </div>
      </div>
      {/* Section 4: Partner Logos */}
      <div className="partner-section">
        <div><h1>Sponcers Support</h1></div>
        <div className="logo-slider">
          {companies.map((logo, index) => (
            <img src={logo} alt={`Company ${index + 1}`} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
