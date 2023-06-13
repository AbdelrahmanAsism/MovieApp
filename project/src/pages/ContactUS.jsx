import React from "react";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

export default function Favorites() {
  const moviesList = useSelector((state) => state.favorites.movieFavorites);
  const navigate = useNavigate();
  const alertClickedMovie = (movie) => {
    navigate(`/movie-details/${movie.id}`, {});
  };

  return (
    <>
      <div className="row my-4">
        {moviesList.map((movie) => {
          movie = { ...movie, isFavoite: true };
          return (
            <div className="col-md-3 my-2" key={movie.id}>
              <MovieCard movie={movie} handleOnClick={alertClickedMovie} />
            </div>
          );
        })}
      </div>
    </>
  );
}
