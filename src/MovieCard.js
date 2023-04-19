import React from 'react';
import Del from './Del';
import Stars from './Stars';
//the cards that contain every movie dtails
function MovieCard({ movie, handleDelete }) {
  console.log(movie)
  const handleDeleteClick = () => {
    handleDelete(movie.name);
  };

  return (
    <div className="MovieCard">
      {/* <Del handleDelete={handleDeleteClick} /> */}
      <Stars rating={movie.rating} />
      <img src={movie.poster} alt={movie.name} />
      <div className="MovieInfo">
        <h2>{movie.name}</h2>
        <p>{movie.director}</p>
        <p>{movie.genre}</p>
        <p>{movie.year}</p>
        {/* <p>{movie.rating}</p> */}
      </div>
    </div>
  );
}

export default MovieCard;
