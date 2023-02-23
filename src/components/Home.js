import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import MovieListing from "./MovieListing";

function Home() {
  const dispatch = useDispatch();
  const movieSearch = "King";
  const showSearch = "Fire";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieSearch));
    dispatch(fetchAsyncShows(showSearch));
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
}

export default Home;
