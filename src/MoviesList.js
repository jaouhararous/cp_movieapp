import React, { useState } from 'react';
import MovieCard from './MovieCard';
// the movie list (for showing all the movies)

function MoviesList({movies}) {
  // const [movies, setMovies] = useState([]);

  // const handleDelete = (name) => {
  //   setMovies(movies.filter((movie) => movie.name !== name));
  // };

  // // render MovieCard components with handleDelete prop
  // const movieCard = movies.map((movie) => (
  //   <MovieCard key={movie.name} movie={movie} handleDelete={handleDelete} />
  // ));

  return (
    <div className="MovieList">
      {
        movies.map((movie) => (
          <MovieCard key={movie.name} movie={movie} />
        ))
      }
    </div>
  );
}

export default MoviesList;
