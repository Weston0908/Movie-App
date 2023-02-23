import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

function MovieCard(props) {
  const { data } = props;
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="movie-card">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <h3>{data.Title}</h3>
          <p>{data.Year}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
