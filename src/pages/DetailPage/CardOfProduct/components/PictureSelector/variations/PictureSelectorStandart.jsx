/* eslint react/prop-types: 0 */

import React from "react";
import "./PictureSelectorStandart.css";
import { useState } from "react";


const PictureSelectorStandart = (props) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const images = props.images;
  return (
    <div className="product-image-selector">
      <img width="100%" src={images[selectedImageIndex]} className="product-image-selector-main-image"/>
      <div className="product-image-selector-thumbnails">
        {images.map((image, index) => (
          <img width="50px" height="50px" key={index} src={image} alt={`Thumbnail ${index}`} className={selectedImageIndex === index ? "selected" : "selector-img"} onClick={() => handleImageClick(index)}/>
        ))}
      </div>
    </div>
  );
};

export default PictureSelectorStandart;