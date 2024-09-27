import React from "react";
import Link from "next/link";
import Image from "next/image";

function MovieCard({ movie }) {
  return (
    <div className="movie-card bg-black shadow-md rounded-lg overflow-hidden">
      <Link href={`/detail/${movie.id}`}>
        <Image
          src={movie.poster}
          alt={`${movie.title} Poster`}
          width={600}
          height={900}
          className="w-full"
        />
        <div className="p-4 bg-black">
          <h2 className="text-lg font-semibold">{movie.title}</h2>
          <p className="text-gray-500">{movie.releaseDate}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
