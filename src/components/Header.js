import React, { useState } from "react";
import user from "../images/profile.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

function Header() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie-APP</div>
      </Link>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          placeholder="Search your movies and shows.."
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button type="submit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <div className="user-image">
        <img src={user} alt="not available" />
      </div>
    </div>
  );
}

export default Header;
