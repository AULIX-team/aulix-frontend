/* eslint react/prop-types: 0 */
import React from "react";
import { useState } from "react";
import "./PictureSelectorMobile.css";


const PictureSelectorMobile = (props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = props.images;

  const handlePreviousImage = () => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(images.length - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex === images.length - 1) {
      setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="image-selector-container">
      <div className="image-container">
        <img src={images[selectedImageIndex]} className="image-container__item" alt="product" />
      </div>
      <div className="button-container">
        <button onClick={handlePreviousImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
};


export default PictureSelectorMobile;