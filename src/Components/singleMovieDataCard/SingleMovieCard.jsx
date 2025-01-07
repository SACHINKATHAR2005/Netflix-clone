import React, { useContext } from "react";
import "./SingleMovieCard.css";
import Navbar from "../Navbar/Navbar";


function SingleMovieCard({ movieData }) {
  
  return (
    <div className="single-movie-container">
      <Navbar/>
      
      <div className="backdrop-section" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})` }}>
        <div className="backdrop-overlay">
          <h1 className="movie-title">{movieData.title}</h1>
          <p className="movie-subtitle">{movieData.tagline || "Uncover unusual wine destinations"}</p>
        </div>
      </div>

  
      <div className="details-section">
        <div className="details-grid">
        
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
              className="poster-image"
            />
          </div>

          
          <div className="info-container">
            <h2 className="section-title">Overview</h2>
            <p className="overview-text">{movieData.overview}</p>

            <div className="details-grid-info">
              <div>
                <span className="label">Release Date:</span> {movieData.release_date}
              </div>
              <div>
                <span className="label">Runtime:</span> {movieData.runtime} min
              </div>
              <div>
                <span className="label">Vote Average:</span> {movieData.vote_average}
              </div>
              <div>
                <span className="label">Status:</span> {movieData.status}
              </div>
            </div>

            {movieData.homepage && (
              <div className="website-link">
                <a href={movieData.homepage} target="_blank" rel="noopener noreferrer">
                  Official Website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

     
      {/* <div className="episode-navigation">
        <span className="episode-link">Cyprus</span>
        <span className="episode-link">Georgia</span>
        <span className="episode-link">Lebanon</span>
        <span className="episode-link">Armenia</span>
        <span className="episode-link">Greece</span>
        <span className="episode-link">Israel</span>
      </div> */}
    </div>
  );
}

export default SingleMovieCard;
