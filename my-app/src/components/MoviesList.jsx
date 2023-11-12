
import { Box, Stack, Typography } from '@mui/material'
import React, { useState, useEffect} from 'react'
import MovieCard from './MovieCard';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import '../App.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 
function MoviesList() {
const baseApi = process.env.REACT_APP_API_URL;
const keyApi = process.env.REACT_APP_API_KEY;
const API = `${baseApi}popular?api_key=${keyApi}`
    const [movies, setMovies] = useState([]);
    const findGames = async () =>{
      const response = await fetch(`${API}`);
      const movieList =await response.json();
      console.log(movieList.results)
      setMovies(movieList.results);
      console.log(movies);
    }
    useEffect(()=>{
      findGames();
    },[])
  return (
    <Box className="mt-10">
        <Typography variant='h3' color={"#2E3B55"}>
            List of Free Movies
        </Typography>
        <Typography variant='h6' color={"#2E3B55"}>
            You can download movie for free on BDFlix
        </Typography>
       

       { movies?.length >0 ?
       (
           <div className='game'> 
            {movies.map((movie,index) => {
              return <MovieCard movie = {movie} />
            }
            
            )} <br />
         </div>
       ) : <h1>No Game</h1>}
    </Box>
  )
}

export default MoviesList