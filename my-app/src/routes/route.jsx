import { lazy } from 'react';

import MoviesList from '../components/MoviesList';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import AddMovie from '../components/AddMovie';
// const Navbar = lazy(()=> import('./components/Navbar'));
// const  Home = lazy(()=>import('./components/Home')) ;
// const MoviesList = lazy(()=> import ('./components/MoviesList')) ;
// eslint-disable-next-line
 
function route() {
  return (
    <div className="App">
        {/* <h1 className='text-5xl'>Hello Tarek</h1> */}
        <Navbar/>
        <hr className='my-6 border-gray-600 border-2'></hr>
        <Home />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <MoviesList />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <Contact />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <AddMovie />
        <hr className='my-1 border-gray-600 border-2'></hr>
        <About />
    </div>
  );
}

export default route;
