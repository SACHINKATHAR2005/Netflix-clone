import React, { useContext, useEffect, useState } from 'react'
import { GlobelContext } from '../../Context/Contex'
import Navbar from '../../Components/Navbar/Navbar';
import MovieTile from '../../Components/MovieTile/movieCard';
import './Movies.css'

function Movies() {
  const {movies,setMovies,isMoviesLoaded, setIsMoviesLoaded} = useContext(GlobelContext);
  const [page,setPage]= useState(2);
  

const fetchMovies = async()=>{
  try {
    const result = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`)
    const data = await result.json()
   console.log(data.results);
  if(data.results){
    setMovies(data.results);
    setIsMoviesLoaded(true);
  }else{
    setMovies([]);
    setIsMoviesLoaded(false);
  }
    
  } catch (error) {
    console.log("someting went wrong",error);
    
  }
}




  useEffect(()=>{
    if (isMoviesLoaded === false) {
      fetchMovies(); 
    }

  },[isMoviesLoaded])
  
  const handleLoadMore =()=>{
    setPage(page+1),
    setIsMoviesLoaded(false)
  }
   
  const handleGoBack = ()=>{
    if (page === 1){
      return setPage(1)
    }else{
      setPage(page-1)
      setIsMoviesLoaded(false)
    }
    
    
  }

  console.log(page);
  
    
  
  

  return (
    <div className='movies-page'>
      <Navbar/>
      <h1 className='movies'>Movies</h1>
      <div>
      {
        movies && movies.length > 0 ?
        movies.map((moviesData,index)=><MovieTile movieData={moviesData} key={index} />) : <h3>No Data found</h3>
      }

      </div>
      <div>
  {isMoviesLoaded && movies.length > 0 ? (
    <>
     
      <button className='btn go-back' onClick={handleGoBack}>go back</button>
      <button className='btn load-more' onClick={handleLoadMore}>Load More</button>
    </>
  ) : null}
</div>
                   
                   
    </div>
  )
}

export default Movies