import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
function UpdateMovie() {
  const [movieInfo , setMovieInfo] = useState({
    moviename : "",
    movieid : "",
    language : "",
    releasedate : "",
    rating: "",
})
const handleMovieNameChange = (e)=>{
    setMovieInfo({
        moviename : e.target.value,
        movieid : movieInfo.movieid,
        language : movieInfo.language,
        releasedate : movieInfo.releasedate,
        rating : movieInfo.rating
    })
}
const handleMovieIdChange = (e)=>{
    setMovieInfo({
        moviename : movieInfo.moviename,
        movieid : e.target.value,
        language : movieInfo.language,
        releasedate : movieInfo.releasedate,
        rating : movieInfo.rating
    })
}
const handleLanguageChange = (e)=>{
    setMovieInfo({
        moviename : movieInfo.moviename,
        movieid : movieInfo.movieid,
        language : e.target.value,
        releasedate : movieInfo.releasedate,
        rating : movieInfo.rating
    })
}
const handleReleaseDate = (e)=>{
    setMovieInfo({
        moviename : movieInfo.moviename,
        movieid : movieInfo.movieid,
        language : movieInfo.language,
        releasedate : e.target.value,
        rating : movieInfo.rating
    })
}
const handleRatingChange = (e)=>{
    setMovieInfo({
        moviename : movieInfo.moviename,
        movieid : movieInfo.movieid,
        language : movieInfo.language,
        releasedate : movieInfo.releasedate,
        rating : e.target.value
    })
}
const getFormValue = (e)=>{
    alert(`::: Movie is added to your movielist :::`);
    console.log(e);

}
return (
<Box>
    <Typography variant='h4' >
          Update A Movie in Your Movie List
    </Typography>
    <Grid>
    <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
      <CardContent> 
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
          Fill up the form Carefully.
      </Typography> 
        <form onSubmit={(e)=>getFormValue(e)}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={12} item>
              <TextField placeholder="Enter Movie name" label="Movie Name" variant="outlined" fullWidth onChange={(e) => handleMovieNameChange(e)} required />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField placeholder="Enter Movie ID" label="Movie ID" variant="outlined" fullWidth onChange={(e) => handleMovieIdChange(e)} required />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField placeholder="Enter language name" label="Language Name" variant="outlined" fullWidth onChange={(e) => handleLanguageChange(e)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField type='string' placeholder="dd/mm/yy" label="Relese Date" variant="outlined" fullWidth onChange={(e) => handleReleaseDate(e)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField type="string" placeholder="Enter Rating" label="Rating" variant="outlined" fullWidth onChange={(e) => handleRatingChange(e)} required />
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

export default UpdateMovie