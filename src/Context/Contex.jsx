import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';



export const GlobelContext = createContext(null);

const MovieProvider =({children})=>{
    const [movieDetails,setMovieDetails] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [singleMovieDeails,setSingleMovieDetail] = useState([]);
    const [movies,setMovies] = useState([]);
    const [isMoviesLoaded, setIsMoviesLoaded] = useState(false);
    const [myList,setMyList] = useState([]);
    const [favoirate,setFavoirate] = useState([]);
    const [latest,setlatest] =useState([]);
    const [latestMovies,setLatestMovies] = useState([]);
    const naviagte = useNavigate();


const fetechMovieDetails = async()=>{
    try {
        setLoading(false)
        setError(null);
        const responce = await fetch ("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
        const data = await responce.json();
        
        if(data.results){
            setMovieDetails(data.results);
            setLoading(false);
            setError(null);
        }else{
            setMovieDetails([]);
            setLoading(false);
            setError("No data found")
        }
        
    } catch (error) {
        console.log("someting went wrong",error);

        
    }
}



useEffect(()=>{
    fetechMovieDetails()
       setFavoirate(JSON.parse(localStorage.getItem("favoirate")) || []);
        
},[])




const getMovieDetails= (id)=>{
   
    naviagte(`/movieDetails/${id}`)

}

const getIdofheromovie = (id)=>{
   
    naviagte(`/movieDetails/${id}`)
}

const trigerMovies =()=>{
    setIsMoviesLoaded(false)
}

const getFavouriteMovie = (id) => {
    console.log(id); // Logs the correct id
  
    // // Assuming favoirate is the state holding the array of favorite movies
    // let fav = [...favoirate]; // Copy the current favorites
  
    // // Use findIndex to check if the movie already exists in favorites
    // let index = fav.findIndex(item => item.id === id); // Use 'id' instead of 'getmovieId'
  
    // if (index === -1) {
    //     // If the movie is not in favorites, add it
    //     fav.push({ id }); // Only store the id or store the full movie object
    //     console.log("Movie added to favorites:", id);
    // } else {
    //     // If the movie is already in favorites, remove it
    //     fav.splice(index, 1);
    //     console.log("Movie removed from favorites:", id);
    // }
  
    // setFavoirate(fav); // Update the state
    // localStorage.setItem("favoirate", JSON.stringify(fav)); // Store the updated favorites in localStorage
  
    // // Ensure navigate has the correct path (optional)
    naviagte(`/myList/${id}`);
};

    return(
        <GlobelContext.Provider value={{movieDetails,
            setMovieDetails,
            loading,
        setLoading,
        fetechMovieDetails ,
        getMovieDetails,
        singleMovieDeails,
        setSingleMovieDetail,
        getIdofheromovie,
        movies,setMovies,
        isMoviesLoaded, 
        setIsMoviesLoaded,
        trigerMovies,
        myList,setMyList,
        favoirate,setFavoirate,
        getFavouriteMovie,
        latest,setlatest,
        latestMovies,setLatestMovies


        }}>
            {children}
        </GlobelContext.Provider>
    )
}

export default MovieProvider;