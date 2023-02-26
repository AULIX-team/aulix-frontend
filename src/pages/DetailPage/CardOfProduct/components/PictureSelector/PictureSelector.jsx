import React from "react";
import "./PictureSelector.css";
import { useState, useEffect } from "react";
import PictureSelectorStandart from "./variations/PictureSelectorStandart";
//import PictureSelectorMobile from "./variations/PictureSelectorMobile";

import image1 from "./../assets/images/1.jpg";
import image2 from "./../assets/images/5.jpeg";
import image3 from "./../assets/images/3.jpg";
import image4 from "./../assets/images/4.jpg";
import PictureSelectorMobile from "./variations/PictureSelectorMobile";


const PictureSelector = () => {
  const images = [image1, image2, image3, image4];
  
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 768;
  const isDesktop = viewportWidth >= 768;

  return (
    <>
      {isMobile && <PictureSelectorMobile images={images} />}
      {isDesktop && <PictureSelectorStandart images={images}/>}
    </>
  );

};

export default PictureSelector;