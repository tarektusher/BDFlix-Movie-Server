import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function DeleteMovie() {
  const [movieInfo , setMovieInfo] = useState({
    movieid : "",
    
})

const handleMovieIdChange = (e)=>{
    setMovieInfo({
        movieid : e.target.value,
    })
}

const getFormValue = (e)=>{
    alert(`::: Movie is added to your movielist :::`);
    console.log(e);

}
return (
<Box>
    <Typography variant='h4' >
            Delete A Movie in Your Movie List
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
              <TextField placeholder="Enter Movie ID" label="Movie ID" variant="outlined" fullWidth onChange={(e) => handleMovieIdChange(e)} required />
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

export default DeleteMovie