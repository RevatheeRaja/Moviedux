import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [genre, setGenre] = useState("All Genre");
  const [rating, setRating] = useState('All')
  /* useEffect(() =>{
        const m = ["a","b","c"]
        setMovies(m)
    }, [])
//[] in useEffect is used to tell the code, when u want to repeat this effect to set movies.
//as of now, its once so we give it as empty array. */

  useEffect(() => {
    fetch("movies.json") //fetch the data from movies.json file
      .then((response) => response.json()) // we will wait and when we have the response which is the raw data we convert it to JSON wit JS Obejcts
      .then((data) => setMovies(data)); // we will wait again and take this converted data, and set the movies using setMovies function and render the movies
  }, []);

  const handleSearchChange = (e) => {
    setSearchMovie(e.target.value);
  };
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );
  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies here...."
        value={searchMovie}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select>
            <option>All Genre</option>
            <option>Drama</option>
            <option>Action</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
         
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {/* insead of movies here use filteredMovies to map , to render real time filtering */}
        {filteredMovies.map(
          (
            movie //for every movie in the array movies, we are rendering a movie card
          ) => (
            <MovieCard movie={movie} key={movie.id} /> //movie={movie} w/o this reac wld not know which property shld be read, key={movie.id} => the primary key for reading the property
          )
        )}
      </div>
    </div>
  );
};

export default MoviesGrid;
