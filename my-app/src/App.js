import { lazy } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// const Navbar = lazy(()=> import('./components/Navbar'));
// const  Home = lazy(()=>import('./components/Home')) ;
// const MoviesList = lazy(()=> import ('./components/MoviesList')) ;
// eslint-disable-next-line
 
function App() {
  return (
    <div className="App">
        {/* <h1 className='text-5xl'>Hello Tarek</h1> */}
        <Navbar/>
        <hr className='my-6 border-gray-600 border-2'></hr>
        <Home></Home>
        <hr className='my-1 border-gray-600 border-2'></hr>
        <MoviesList/>
        <hr className='my-1 border-gray-600 border-2'></hr>
        <About></About>
    </div>
  );
}

export default App;
