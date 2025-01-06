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
},[])




const getMovieDetails= (id)=>{
    console.log("clicked",id);
    naviagte(`/movieDetails/${id}`)

}

const getIdofheromovie = (id)=>{
    console.log("clicked",id);
    naviagte(`/movieDetails/${id}`)
}

const trigerMovies =()=>{
    setIsMoviesLoaded(false)
}





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
        trigerMovies}}>
            {children}
        </GlobelContext.Provider>
    )
}

export default MovieProvider;