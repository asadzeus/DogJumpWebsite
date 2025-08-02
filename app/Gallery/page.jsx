"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageCount = 5;

  const handleLeftClick = () => {
    setImageIndex(prev => (prev > 0 ? prev - 1 : imageCount - 1));
  };

  const handleRightClick = () => {
    setImageIndex(prev => (prev < imageCount - 1 ? prev + 1 : 0));
  };

  return (
    <div className={`gallery flex justify-center items-center h-screen bg-cover bg-center transition `} style={{ backgroundImage: `url(/ss${imageIndex + 1}.png)` }}>
      <title>Gallery</title>
      <div
        className="left flex justify-start items-center flex-1 ml-15 cursor-pointer"
        onClick={handleLeftClick}
      >
        <FaArrowLeft size={35}/>
      </div>
      <div className="right flex justify-end items-center flex-1 mr-15 cursor-pointer" onClick={handleRightClick}>
        <FaArrowRight size={35} />
      </div>
    </div>
  );
};

export default Gallery;
