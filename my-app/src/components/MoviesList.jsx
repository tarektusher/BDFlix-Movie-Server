import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "../App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MoviesList() {
  const baseApi = process.env.REACT_APP_API_URL;
  const keyApi = process.env.REACT_APP_API_KEY;
  const API = `${baseApi}popular?api_key=${keyApi}`;
  const preSearchApi = process.env.REACT_APP_SEARCH_API;
  const [movies, setMovies] = useState([]);
  const [queryTerm, setQueryTerm] = React.useState("");

  const findGames = async () => {
    const response = await fetch(`${API}`);
    const movieList = await response.json();
    // console.log(movieList.results);
    setMovies(movieList?.results);
    // console.log(movies);
  };
  useEffect(() => {
    findGames();
  }, []);

  const searchGames = async (name) => {
    console.log(preSearchApi);
    const searchApi = `${preSearchApi}query=${name}&api_key=${keyApi}`;
    const response = await fetch(searchApi);
    const movieList = await response.json();
    setMovies(movieList?.results);
  };
  function compare( a, b ) {
    console.log(a.title);
    if ( a.title< b.title){
      return -1;
    }
    if ( a.title > b.title){
      return 1;
    }
    return 0;
  }
  
  const sortFunction = () =>{
    setMovies(movies?.sort(compare));
    
  }
  React.useEffect(() => {
    searchGames(queryTerm);
  }, []);
  return (
    <Box className="mt-10" id="movie">
      <Typography variant="h3" color={"#2E3B55"}>
        List of Free Movies
      </Typography>
      <Typography variant="h6" color={"#2E3B55"}>
        You can download movie for free on BDFlix
      </Typography>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full  p-4 ps-10   text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search ..."
          value={queryTerm}
          onChange={(e) => setQueryTerm(e.target.value)}
          required
        />
        {console.log(queryTerm)}
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => searchGames(queryTerm)}
        >
          Search
        </button>
      </div>
      <Button  variant="contained" sx={{margin : '2vh 0vh',background : "#1565C0", fontWeight : '600'}} onClick={()=>sortFunction()}>
        Sort Movie Item
      </Button>
      {movies?.length > 0 ? (
        <div className="movie">
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} />;
          })}{" "}
          <br />
        </div>
      ) : (
        <Typography variant="h3">Please Waiting Server is Running</Typography>
      )}
    </Box>
  );
}

export default MoviesList;
