import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getAllDetails,
  removeDetails,
} from "../features/movies/movieSlice";
import "./MovieDetail.scss";

function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector(getAllDetails);

  useEffect(() => {
    dispatch(fetchAsyncDetails(id));
    return () => {
      dispatch(removeDetails());
    };
  }, [dispatch, id]);
  return (
    <div className="movie-detail-container">
      {Object.keys(details).length === 0 ? (
        <div className="loading">...Loading</div>
      ) : (
        <div className="movie-detail-card">
          <div className="movie-details">
            <div className="movie-header">
              <h3 className="movie-title">
                {details.Title} ({details.Year})
              </h3>
              <p className="movie-year">
                {details.Awards && (
                  <span className="ml-2 movie-award">
                    <i className="fa fa-trophy" /> {details.Awards}
                  </span>
                )}
              </p>
            </div>
            <div className="movie-info">
              <p>
                <strong>Director:</strong> <span>{details.Director}</span>
              </p>
              <p>
                <strong>Actors:</strong> <span>{details.Actors}</span>
              </p>
              <p>
                <strong>Runtime:</strong> <span>{details.Runtime}</span>
              </p>
              <p>
                <strong>Genre:</strong> <span>{details.Genre}</span>
              </p>
              <p>
                <strong>Language:</strong> <span>{details.Language}</span>
              </p>
              <p>
                <strong>Country:</strong> <span>{details.Country}</span>
              </p>
              <hr className="movie-divider" />
              <p className="movie-rating">
                <i className="fa fa-star" aria-hidden="true" />{" "}
                {details.imdbRating} ({details.imdbVotes} votes)
              </p>
              {details.Ratings && (
                <p className="movie-other-ratings">
                  <strong>Other ratings:</strong>{" "}
                  {details.Ratings.map((rating, index) => (
                    <span key={index}>
                      {rating.Source} ({rating.Value})
                      {index !== details.Ratings.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              )}
              <hr className="movie-divider" />
              <p className="movie-plot">{details.Plot}</p>
            </div>
          </div>
          <div className="movie-poster">
            <img src={details.Poster} alt={details.Title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
