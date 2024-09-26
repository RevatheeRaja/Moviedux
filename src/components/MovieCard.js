import React from "react";
import "../styles.css";
const MovieCard = ({ movie }) => {
  const handleError = (event) => {
    event.target.src = "images/default.jpg";
  };
  const getRatingclass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }
    if (rating >= 5 && rating < 8) {
      return "rating-ok";
    }
    return "rating-bad";
  };
  return (
    // we have list on movies in the array. now we are mapping each movie with map method, create one new card for
    //each of the individual movie with the key on unique id and use divs to create a movie card.
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingclass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
