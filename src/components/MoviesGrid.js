import React, { useState, useEffect } from "react";
import "../styles.css";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="movies-grid">
      {movies.map((movie) => ( // we have list on movies in the array. now we are mapping each movie with map method, create one new card for 
      //each of the individual movie with the key on unique id and use divs to create a movie card.
        <div key={movie.id} className="movie-card">
          <img src={`images/${movie.image}`} alt={movie.title} />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
