import React, { useState } from "react";
import Add from "./components/Add";
import "./App.css";
import MovieList from "./components/MoviesList";
import Search from "./components/Search";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Trailer from "./components/Trailer"

function App() {
  const [movies, setMovies] = useState([
    {
      //array to test
      name: "V for Vendetta",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1avD1JeaRiJX5M4ahPdZPypGoGN.jpg",
      rating: 4,
      year: 2006,
      director: "James McTeigue",
      genre: "Action, Adventure, Sci-Fi",
      Trailer: "https://www.youtube.com/embed/lSA7mAHolAw",
      description:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Parasite",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      rating: 5,
      year: 2019,
      director: "Bong Joon-ho",
      genre: "Comedy, Drama, Thriller",
      Trailer: "https://www.youtube.com/embed/SEUXfv87Wpk",
      description:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      rating: 5,
      year: 2019,
      director: "J.R.R. Tolkien",
      genre: "Action, Adventure, Sci-Fi",
      Trailer: "https://youtu.be/A69ElUS5yWc",
      description:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      poster:
        " https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      rating: 4,
      year: 2001,
      director: "J.K. Rowling",
      genre: "Action, Adventure, Sci-Fi",
      Trailer:"https://www.youtube.com/embed/VyHV0BRtdxo",
      description:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
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
  const [search, setsearch] = useState("");
  const [stars, setstars] = useState(1);
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };
  const handleStars = (x) => {
    setstars(x);
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Search
        stars={stars}
        search={search}
        handleSearch={handleSearch}
        handleStars={handleStars}
      />
     
        <Add addMovie={addMovie} />
       

        <Routes>
      
      
          <Route path="/" element={  <MovieList
        handleDelete={handleDelete}
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase()) &&
            el.rating >= stars
        )}
      />}
      />
          <Route path="/:name" element={<Trailer movie={movies} />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
