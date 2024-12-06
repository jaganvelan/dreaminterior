import React from 'react';
import './Home.Module.css';
import wood1 from '../../images/wood1.jpeg';
import wood2 from '../../images/wood2.jpg';
import wood3 from '../../images/wood3.jpeg';
import wood4 from '../../images/wood4.jpg';
import wood5 from '../../images/wood5.jpg';
import wood6 from '../../images/wood6.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  // JSON data defined directly inside the component
  const items = [
    {
      "image": wood1,
      "woodName": "Oak Wood",
      "costPerInch": 200
    },
    {
      "image": wood2,
      "woodName": "Maple Wood",
      "costPerInch": 250
    },
    {
      "image": wood3,
      "woodName": "Pine Wood",
      "costPerInch": 180
    },
    {
      "image": wood4,
      "woodName": "Oak Wood",
      "costPerInch": 200
    },
    {
      "image": wood5,
      "woodName": "Maple Wood",
      "costPerInch": 250
    },
    {
      "image": wood6,
      "woodName": "Pine Wood",
      "costPerInch": 180
    }
  ];

  // Card component to render each item
  const Card = ({ image, woodName, costPerInch }) => {
    return (
      <div className="card">
        <img src={image} alt={woodName} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{woodName}</h3>
          <p className="card-price">₹{costPerInch} per inch</p>
        </div>
      </div>
    );
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Dream Interior Plywood</h1>
        <p>Crafting exceptional interiors with premium quality plywood.</p>
        <Link to="/gallery">
      <button>Explore Our Gallery</button>
    </Link>
      </section>

      <section className="card-container">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}        // Access image directly from JSON
            woodName={item.woodName}  // Access wood name from JSON
            costPerInch={item.costPerInch}  // Access cost per inch from JSON
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
