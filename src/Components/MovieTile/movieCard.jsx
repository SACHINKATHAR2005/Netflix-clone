import "./titlecard.css"
import info_icon from "../../assets/info_icon.png"
import { useContext } from "react";
import { GlobelContext } from "../../Context/Contex";
import React from 'react';



const MovieTile = ({ movieData }) => {
  const {getMovieDetails} = useContext(GlobelContext)
  console.log(movieData);

  let img = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;


  return (
    <div className="movie-tile">
      <img src={img} alt="" className="movie-poster" />
      <div>
      <button className='btna dark-btna' onClick={()=>getMovieDetails(movieData.id)}><img src={ info_icon} alt="" /></button>
      </div>
      
    </div>
  );
};

export default MovieTile;
