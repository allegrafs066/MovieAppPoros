import React from "react";
import MovieCard from "./moviecard";
import { movieData } from "../data/movies";

function MovieList() {
  return (
    <div className="min-h-screen w-full bg-gray-400 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
