import React, { useContext, useEffect } from 'react'
import { GlobelContext } from '../../Context/Contex'
import { useParams } from 'react-router-dom';
import SingleMovieCard from '../../Components/singleMovieDataCard/SingleMovieCard';

function MovieDetails() {
  const {singleMovieDeails,setSingleMovieDetail,loading,setLoading} =useContext(GlobelContext);
  const {id} = useParams();
  

  const fetchSingleMovieDetail = async()=>{
    try {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`)
      const data = await result.json();
      if(data){
        setLoading(false)
        setSingleMovieDetail(data)
      }else{
        setLoading(false)
        setSingleMovieDetail([])
      }
      
      
    } catch (error) {
      console.log("someting went wrong",error);
    }
  }

  useEffect(()=>{
    fetchSingleMovieDetail(id)
  },[id])


  

  return (
    <div>
      
     
      
      <div>
      {loading && <div>Loading...</div>}
      {singleMovieDeails ? (
        <div>
          {/* <h1>{singleMovieDeails.title}</h1> */}
          <SingleMovieCard movieData={singleMovieDeails} />
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>

      
      
    </div>
    
  )
}

export default MovieDetails

