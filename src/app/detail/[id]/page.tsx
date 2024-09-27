import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { movieData } from "@/app/data/movies";

export default function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const movieId = parseInt(id);

  const movie = movieData.find((movie) => movie.id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
        <Image
          src={movie.poster}
          alt={`${movie.title} Poster`}
          width={600}
          height={900}
          className="mt-4 rounded"
        />
        <p className="mt-2">Release Date: {movie.releaseDate}</p>
        <Link href="/" className="block mt-4 text-blue-500">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
