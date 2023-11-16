import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
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
const imgBaseURl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const MovieCard = (movie) => {
    const imgurl = imgBaseURl+`${movie.movie.poster_path}`
  return (
    <div >
        <Card sx={{width : '300px', height : 'auto'}} className='mt-6'>
        <CardActionArea>
            <CardMedia
            component="img"
            height="50"
            image={`${imgurl}`}
            alt="movie image"
            />
            <CardContent sx={{background : "#2E3B55", color : "white"}}>
              <Typography gutterBottom variant="h5" component="div">
              {movie.movie.title}
              </Typography>
              <Typography variant="body2" color="#9E9E9E">
              Movie Id : {movie.movie.id}
              </Typography>
              <Typography variant="body2" color="#9E9E9E">
              Language : {movie.movie.original_language}
              </Typography>
              <Typography variant="body2" color="#9E9E9E">
              Release Date : {movie.movie.release_date}
              </Typography>
              <Typography variant="body2" color="#9E9E9E">
              IMDB Ragting : {movie.movie.vote_average}
              </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}
export default MovieCard;

