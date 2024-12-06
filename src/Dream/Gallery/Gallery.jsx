import React from 'react';
import './Gallery.Module.css';
import wood7 from '../../images/cuboard1.jpg';
import wood8 from '../../images/cuboard2.jpg';
import wood9 from '../../images/cuboard3.jpg';
import wood10 from '../../images/cuboard5.jpeg';
import wood11 from '../../images/cuboard7.jpg';
import wood12 from '../../images/cuboard13.jpg';
import wood1 from '../../images/cuboard3.jpg';
import wood2 from '../../images/cuboard5.jpeg';
import wood3 from '../../images/cuboard6.png';
import wood4 from '../../images/cuboard2.jpg';
import wood5 from '../../images/cuboard13.jpg';
import wood6 from '../../images/cuboard1.jpg';
import wood13 from '../../images/cuboard5.jpeg';
import wood14 from '../../images/cuboard13.jpg';
import wood15 from '../../images/cuboard3.jpg';


const Gallery = () => {
  const items = [
    {
      image: wood7,
      woodName: "Oak Wood",
      costPerInch: 200,
    },
    {
      image: wood8,
      woodName: "Maple Wood",
      costPerInch: 250,
    },
    {
      image: wood9,
      woodName: "Pine Wood",
      costPerInch: 180,
    },
    {
      image: wood10,
      woodName: "Cherry Wood",
      costPerInch: 220,
    },
    {
      image: wood11,
      woodName: "Teak Wood",
      costPerInch: 300,
    },
    {
      image: wood12,
      woodName: "Walnut Wood",
      costPerInch: 270,
    },
    {
        image: wood1,
        woodName: "Oak Wood",
        costPerInch: 200,
      },
      {
        image: wood2,
        woodName: "Maple Wood",
        costPerInch: 250,
      },
      {
        image: wood3,
        woodName: "Pine Wood",
        costPerInch: 180,
      },
      {
        image: wood4,
        woodName: "Cherry Wood",
        costPerInch: 220,
      },
      {
        image: wood5,
        woodName: "Teak Wood",
        costPerInch: 300,
      },
      {
        image: wood6,
        woodName: "Walnut Wood",
        costPerInch: 270,
      },
      {
        image: wood13,
        woodName: "Cherry Wood",
        costPerInch: 220,
      },
      {
        image: wood14,
        woodName: "Teak Wood",
        costPerInch: 300,
      },
      {
        image: wood15,
        woodName: "Walnut Wood",
        costPerInch: 270,
      },
  ];

  return (
    <div className="gallery">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.woodName} className="gallery-image" />
            <div className="gallery-overlay">
              <h3>{item.woodName}</h3>
              <p>₹{item.costPerInch} per inch</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
