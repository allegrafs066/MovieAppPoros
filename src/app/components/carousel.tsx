"use client";

import React, { useState } from "react";
import Image from "next/image";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel relative">
      <button
        onClick={prevSlide}
        className="carousel__btn carousel__btn--prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
      >
        &lt;
      </button>
      <Image
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        width={1280}
        height={720}
        className="carousel__img"
      />
      <button
        onClick={nextSlide}
        className="carousel__btn carousel__btn--next absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
