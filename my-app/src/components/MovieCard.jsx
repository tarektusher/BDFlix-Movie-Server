import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
// import Image from "material-ui-image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
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
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {movie.movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Language : {movie.movie.original_language}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Release Date : {movie.movie.release_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            IMDB Ragting : {movie.movie.vote_average}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}
export default MovieCard;


// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

// export default function MovieCard({movie}) {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }}>
//       {/* {itemData.map((item) => ( */}
//         <ImageListItem key={movie.movie.poster_path}>
//           <img
//             srcSet={`${movie.movie.poster_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             src={`${movie.movie.poster_path}?w=248&fit=crop&auto=format`}
//             alt={movie.movie.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={movie.movie.title}
//             // subtitle={<span>by: {item.author}</span>}
//             position="below"
//           />
//         </ImageListItem>
//       {/* ))} */}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
// ];