
import { useEffect, useState } from "react";
import MovieContext from "./MovieContext";
// eslint-disable-next-line
const MovieContextProvider = (props) =>{
    const baseApi = process.env.REACT_APP_API_URL;
    const keyApi = process.env.REACT_APP_API_KEY;
    const API = `${baseApi}now_playing?api_key=${keyApi}`;
    const [movies, setMovies] = useState([]);

    const findGames = async () => {
        const response = await fetch(`${API}`);
        const movieList = await response.json();
        setMovies(movieList?.results);
        //console.log(movies);
    };
    useEffect(() => {
        findGames();
    }, []);

    // console.log(movies)
    return (
        <MovieContext.Provider value = {{movies, setMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;