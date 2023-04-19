import React, { useState } from 'react';
import Add from './components/Add';
import './App.css';
import MovieList from './components/MoviesList';
import Search from './components/Search';
function App() {
  const [movies, setMovies] = useState([
    {
      //array to test
      name: "V for Vendetta",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1avD1JeaRiJX5M4ahPdZPypGoGN.jpg",
      rating: 4,
      year: 2006,
      director: "James McTeigue",
      genre: "Action, Adventure, Sci-Fi"
    },
    {
      name: "Parasite",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      rating: 5,
      year: 2019,
      director: "Bong Joon-ho",
      genre: "Comedy, Drama, Thriller"
    },
    {
      name: "The Lord of the Rings: The Return of the King",
         poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
      rating: 5,
      year: 2019,
      director: "J.R.R. Tolkien",
      genre: "Action, Adventure, Sci-Fi"
    },
    {
      name: "Harry Potter and the Philosopher's Stone ",
      poster: " https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      rating: 4,
      year: 2001,
      director: "J.K. Rowling",
      genre: "Action, Adventure, Sci-Fi"
    }
  ]);
//adding movies to th array
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  //deleting movies from th array
  const handleDelete = (name) => {
    setMovies(movies.filter((movie) => movie.name !== name));
  };
  //searching and filtering by stars
const [search, setsearch] = useState("")
const [stars, setstars] = useState(1)
const handleSearch = (e) => {setsearch(e.target.value);};
const handleStars = (x) => {setstars(x)};
  return (
    <div className="App">
      <Search stars={stars} search={search} handleSearch={handleSearch} handleStars={handleStars}/>
      <Add addMovie={addMovie} />
      <MovieList handleDelete={handleDelete} movies={movies.filter(el => el.name.toLowerCase().includes(search.toLowerCase())&& el.rating >= stars)} />

      {/* <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.name} movie={movie} handleDelete={handleDelete} />
        ))}
      </div> */}
      </div>
  );
}

export default App;
