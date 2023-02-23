import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { settings } from "../common/reactSlickSettings";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((item, index) => {
        return <MovieCard key={index} data={item} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  const renderShows =
    shows.Response === "True" ? (
      shows.Search.map((item, index) => {
        return <MovieCard key={index} data={item} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="movies-list">
        <h2>Movies</h2>
        <div className="movies-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <div className="shows-container">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
