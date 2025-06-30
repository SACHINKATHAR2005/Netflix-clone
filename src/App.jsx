import React from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import './index.css'
import MovieDetails from './pages/movieDetails/MOvieDetails'
import Movies from './pages/Movies/Movies'
import MyList from './pages/myList/MyList'
import Latest from './pages/latest/Latest'
import TvShow from './pages/TvShow/TvShow'

function App() {
  return (
    <>
      <Routes>
        {/* Default route to redirect to /Home */}
        <Route path='/' element={<Navigate to="/Home" />} />

        <Route path='/Home' element={<Home />} />
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/myList/:id' element={<MyList />} />
        <Route path='/latest' element={<Latest />} />
        <Route path='/tvshow' element={<TvShow />} />

        {/* Catch-all route for 404 */}
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>

      <Link to={'/Home'}>Go to Home page</Link>
    </>
  )
}

export default App
