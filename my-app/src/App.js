import { lazy } from 'react';

import './App.css';
const Navbar = lazy(()=> import('./components/Navbar'));
const  Home = lazy(()=>import('./components/Home')) ;
const Dashboard = lazy(()=> import ('./components/Dashboard')) ;
// eslint-disable-next-line
 
function App() {
  return (
    <div className="App">
        {/* <h1 className='text-5xl'>Hello Tarek</h1> */}
        <Navbar/>
        <hr className='my-1 border-gray-600 border-2'></hr>
        <Home></Home>
        <hr className='my-1 border-gray-600 border-2'></hr>
        <Dashboard/>
    </div>
  );
}

export default App;
