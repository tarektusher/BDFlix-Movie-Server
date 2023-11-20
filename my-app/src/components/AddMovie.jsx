import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import MovieContext from '../context/MovieContext'

function AddMovie() {
    const [movieInfo , setMovieInfo] = useState({
        title : "",
        id : "",
        original_language : "",
        release_date : "",
        vote_average: "",
    })
    const handletitleChange = (e)=>{
        setMovieInfo({
            title : e.target.value,
            id : movieInfo.id,
            original_language : movieInfo.original_language,
            release_date : movieInfo.release_date,
            vote_average : movieInfo.vote_average
        })
    }
    const handleidChange = (e)=>{
        setMovieInfo({
            title : movieInfo.title,
            id : e.target.value,
            original_language : movieInfo.original_language,
            release_date : movieInfo.release_date,
            vote_average : movieInfo.vote_average
        })
    }
    const handleoriginal_languageChange = (e)=>{
        setMovieInfo({
            title : movieInfo.title,
            id : movieInfo.id,
            original_language : e.target.value,
            release_date : movieInfo.release_date,
            vote_average : movieInfo.vote_average
        })
    }
    const handlerelease_date = (e)=>{
        setMovieInfo({
           title : movieInfo.title,
            id : movieInfo.id,
            original_language : movieInfo.original_language,
            release_date : e.target.value,
            vote_average : movieInfo.vote_average
        })
    }
    const handlevote_averageChange = (e)=>{
        setMovieInfo({
           title : movieInfo.title,
            id : movieInfo.id,
            original_language : movieInfo.original_language,
            release_date : movieInfo.release_date,
            vote_average : e.target.value
        })
    }
    const {setMovies} = useContext(MovieContext);
    const getFormValue = (e)=>{
        e.preventDefault();
        console.log(movieInfo);
        setMovies((old)=>[...old, movieInfo]);
        alert(`::: Movie is added to your movielist :::`);
    }
  return (
    <Box sx={{background : '#2C3952' }} id = "addmovie">
      <Grid sx={{paddingTop : '2vw'}}>
        <Typography variant='h4' sx={{ width :'40vw', textAlign : 'center', borderRadius : '4px', padding : '4px', marginLeft : '30vw', color : 'white'}}>
                Add A Movie in Your Movie List
        </Typography></Grid>
        <Grid sx={{paddingBottom : '2vw', marginTop : '2vh'}}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form Carefully.
          </Typography> 
            <form onSubmit={(e)=>getFormValue(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Enter Movie name" label="Movie Name" variant="outlined" fullWidth onChange={(e) => handletitleChange(e)} required />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Enter Movie ID" label="Movie ID" variant="outlined" fullWidth onChange={(e) => handleidChange(e)} required />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Enter language name" label="Language Name" variant="outlined" fullWidth onChange={(e) => handleoriginal_languageChange(e)} required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type='string' placeholder="dd-mm-yy" label="Relese Date" variant="outlined" fullWidth onChange={(e) => handlerelease_date(e)} required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="string" placeholder="Enter IMDB Rating" label="IMDB Rating" variant="outlined" fullWidth onChange={(e) => handlevote_averageChange(e)} required />
                </Grid>
                
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth >Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default AddMovie