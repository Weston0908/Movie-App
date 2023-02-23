import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { apiKey } from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${apiKey}&s=${term}&type=movie`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${apiKey}&s=${term}&type=series`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${apiKey}&i=${id}&plot=full`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  details: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeDetails: (state) => {
      state.details = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully");
      return { ...state, details: payload };
    },
  },
});

export const { removeDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetails = (state) => state.movies.details;
// first movies is the name of reducer
export default movieSlice.reducer;
