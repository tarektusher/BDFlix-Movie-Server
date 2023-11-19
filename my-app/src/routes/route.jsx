import { lazy } from 'react';
const About  = lazy(()=> import('../components/About'));
const Contact = lazy(()=> import('../components/Contact'));
const AddMovie = lazy(()=> import('../components/AddMovie'));
const DeleteMovie = lazy(()=> import('../components/DeleteMovie'));
const UpdateMovie = lazy(()=> import('../components/UpdateMovie'));
const FindMovieDetail = lazy(()=> import('../components/FindMovieDetail'));
const Navbar = lazy(()=> import('../components/Navbar'));
const  Home = lazy(()=>import('../components/Home')) ;
const MoviesList = lazy(()=> import ('../components/MoviesList')) ;
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
