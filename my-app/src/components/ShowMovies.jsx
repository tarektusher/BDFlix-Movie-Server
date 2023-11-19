import React from 'react'
import "../App.css";
import MovieCard from './MovieCard';
function ShowMovies(movies) {
    console.log(movies.movies)
  return (
    <div className="movie">
    {movies?.movies.map((movie, index) => {
      return <MovieCard movie={movie} />;
    })}{" "}
    <br />
  </div>
  )
}

export default ShowMovies