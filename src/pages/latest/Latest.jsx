import React, { useContext, useEffect, useState } from 'react';
import { GlobelContext } from '../../Context/Contex';
import MovieTile from '../../Components/MovieTile/movieCard';
import Navbar from '../../Components/Navbar/Navbar';

function Latest() {
  const { latest, setlatest, latestMovies, setLatestMovies } = useContext(GlobelContext);
  const [year, setYear] = useState(new Date().getFullYear());  // Current year
  const [previousYear, setPreviousYear] = useState(new Date().getFullYear() - 1);  // Previous year

  const fetchLatestMovies = async () => {
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
      );
      const data = await result.json();

      if (data.results) {
        setLatestMovies(true);
        setlatest(data.results);
      } else {
        setLatestMovies(false);
        setlatest([]);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    if (latestMovies.length === 0) {
      fetchLatestMovies();
    }
  }, [latestMovies]);

  // Filter movies based on current or previous year
  const filteredMovies = latest.filter(movie => {
    const releaseYear = new Date(movie.release_date).getFullYear(); // Get the release year of the movie
    return releaseYear === year || releaseYear === previousYear;
  });

  return (
    <div>
        <div>
            <Navbar/>
        </div>
      
      <h2>Movies of {previousYear} and {year}</h2> 

      {/* Render filtered movies in a grid */}
      <div className="movie-grid">
        {
          filteredMovies.length > 0 ? 
          filteredMovies.map((movie, index) => (
            <MovieTile key={index} movieData={movie} />
          )) :
          <h3>No movies found for {previousYear} and {year}</h3>
        }
      </div>
    </div>
  );
}

export default Latest;
