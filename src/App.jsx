

import React from 'react'

import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './index.css'  
import MovieDetails from './pages/movieDetails/MOvieDetails'
import Movies from './pages/Movies/Movies'

function App() {
 

  return (
    <>
     
      <Routes>
    <Route path='/Home' element = {<Home/>}/>
    <Route path='/movieDetails/:id' element = {<MovieDetails/>}/>
    <Route path='/movies' element={<Movies/>}/>
      </Routes>

      <Link to={'/Home'}>Go to Home page </Link>
    </>
  )
}

export default App
