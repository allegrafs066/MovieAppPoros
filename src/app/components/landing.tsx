import React from "react";
import Carousel from "./carousel";
import { movieData } from "../data/movies";

function Landing() {
  const images = movieData.map((movie) => movie.poster);

  return (
    <div className="h-screen w-full bg-slate-900 flex justify-center items-center overflow-y-hidden">
      <Carousel images={images} />
    </div>
  );
}

export default Landing;
