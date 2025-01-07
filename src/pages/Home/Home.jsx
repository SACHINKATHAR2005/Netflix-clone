import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { GlobelContext } from '../../Context/Contex'
import './home.css'
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import MovieTile from '../../Components/MovieTile/movieCard'
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
  const {movieDetails,setMovieDetails,loading,setLoading,fetechMovieDetails,getIdofheromovie } = useContext(GlobelContext);
  const navigate = useNavigate();
  // const {id}= useParams();

  const [heroMovie, setHeroMovie] = useState({
    image: '',
    title: '',
    overview: ''
  });
  const [isHovered, setIsHovered] = useState(false); // For hover effect on play button

  useEffect(() => {
    if (movieDetails && movieDetails.length > 0) {
      const firstMovie = movieDetails[0];
      const heroImageUrl = `https://image.tmdb.org/t/p/original${firstMovie.backdrop_path}`;
      const heroTitle = firstMovie.title;
      const heroOverview = firstMovie.overview;

      setHeroMovie({ image: heroImageUrl, title: heroTitle, overview: heroOverview });
    }
  }, [movieDetails]);


  return (
    <div>
      {
        loading ? <div>Loading...</div> : null
      }
      <Navbar/>
      <div className="hero">
        <img src={heroMovie.image} alt="" className='banner-img ' />
        <div className="hero-caption">
          <h1 className='hero-title'>{heroMovie.title}</h1>
          <p className='hero-overview'>{heroMovie.overview}</p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn' onClick={()=>getIdofheromovie(movieDetails[0].id)}> <img src={ info_icon} alt=""  />More info</button>

          </div>
        </div>

      </div>
      <div>
    <h2 className="popular">Popular On Netflix</h2>
</div>

<div className="movie-grid">
    {movieDetails && movieDetails.length > 0 ? (
        movieDetails.map((movieCard, index) => (
            <MovieTile key={index} movieData={movieCard} />
        ))
    ) : (
        <h3>No Data Found</h3>
    )}
</div>

    </div>
  )
}

export default Home
