import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import AddMovie from '../components/AddMovie';
import DeleteMovie from '../components/DeleteMovie';
import UpdateMovie from '../components/UpdateMovie';
import FindMovieDetail from '../components/FindMovieDetail';
// const Navbar = lazy(()=> import('./components/Navbar'));
// const  Home = lazy(()=>import('./components/Home')) ;
// const MoviesList = lazy(()=> import ('./components/MoviesList')) ;
// eslint-disable-next-line
 
function route() {
  
  return (
    <div className="App">
        <Navbar/>
        <hr className='my-6 border-gray-600 border-2'></hr>
        <Home />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <MoviesList />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <AddMovie />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <DeleteMovie />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <UpdateMovie/>
        <hr className='my-1 border-gray-600 border-2'></hr>
        <FindMovieDetail/>
        <hr className='my-1 border-gray-600 border-2'></hr>
        <Contact />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <About />
    </div>
  );
}

export default route;
