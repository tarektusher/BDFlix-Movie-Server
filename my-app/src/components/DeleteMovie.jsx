import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";

function DeleteMovie() {
  const [movieInfo, setMovieInfo] = useState({
    movieid: 10,
  });

  const handleMovieIdChange = (e) => {
    setMovieInfo({
      movieid: e.target.value,
    });
  };
  const { movies, setMovies } = useContext(MovieContext);
  const getFormValue = (e) => {
    e.preventDefault();
    let Id = parseInt(movieInfo.movieid);
    setMovies(movies.filter((movie) => movie.id !== Id));
    alert(`::: Movie is deleted Successfully :::`)
  };
  return (
    <Box style={{ background: "#2C3952" }}>
      <Grid sx={{ paddingTop: "2vw" }}>
        <Typography
          variant="h4"
          sx={{
            width: "40vw",
            textAlign: "center",
            borderRadius: "4px",
            padding: "4px",
            marginLeft: "30vw",
            color: "white",
          }}
        >
          Delete A Movie in Your Movie List
        </Typography>
      </Grid>
      <Grid sx={{ paddingBottom: "2vw", marginTop: "2vh" }}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form Carefully.
            </Typography>
            <form onSubmit={(e) => getFormValue(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    placeholder="Enter Movie ID"
                    label="Movie ID"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleMovieIdChange(e)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}

export default DeleteMovie;
