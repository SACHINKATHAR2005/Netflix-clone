import React, { useContext } from 'react'
import MovieTile from '../../Components/MovieTile/movieCard'
import { GlobelContext } from '../../Context/Contex'
import './myList.css'
import Navbar from '../../Components/Navbar/Navbar';

function MyList() {
  const {
    favoirate,setFavoirate} = useContext(GlobelContext);
  return (
    <div>
      <div>
      <Navbar/>
      </div>
<div className="myList">
    
    
    <div className='myList-movies'>
    <h1 className='error'>
      this fuction is not working properly
    </h1>
    </div>
    
   
   </div>
    </div>
   
  )
}

export default MyList