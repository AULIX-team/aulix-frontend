import React from "react";
import "./PictureSelector.css";
import { useState } from "react";

import image1 from "./../assets/images/1.jpg";
import image2 from "./../assets/images/5.jpeg";
import image3 from "./../assets/images/3.jpg";
import image4 from "./../assets/images/4.jpg";


const PictureSelector = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const images = [image1, image2, image3, image4];

  return (
    <div className="product-image-selector">
      <img width="100%" height="500px" src={images[selectedImageIndex]} className="product-image-selector-main-image"/>
      <div className="product-image-selector-thumbnails">
        {images.map((image, index) => (
          <img width="50px" height="50px" key={index} src={image} alt={`Thumbnail ${index}`} className={selectedImageIndex === index ? "selected" : "selector-img"} onClick={() => handleImageClick(index)}/>
        ))}
      </div>
    </div>
  );
};

export default PictureSelector;