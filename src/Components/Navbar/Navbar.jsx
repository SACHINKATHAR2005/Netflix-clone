import React, { useContext } from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg"
import { useNavigate } from 'react-router-dom';
import { GlobelContext } from '../../Context/Contex';


function Navbar() {
    const naviagte = useNavigate();
    const {trigerMovies} =useContext(GlobelContext);
  return (
    <div className="navbar">
        <div className="navbar-left">
            <img src={logo} alt="" onClick={()=>naviagte("/Home")}/>
            <ul>
                <li onClick={()=>naviagte("/Home")}> home</li>
                <li onClick={()=>naviagte("/tvshow")}>tv shows</li>
                <li  onClick={()=>
                    {
                        naviagte("/movies")
                        trigerMovies
                    }}>movies</li>
                <li onClick={()=>naviagte("/latest")}>latest</li>
                <li onClick={()=>naviagte("/myList")}>my list</li>

            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons' />
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className='navbar-profile'>
            <img src={profile_img} alt=""  className='profile'/>
            <img src={caret} alt="" />
            <div className="dropdown">
                <p>Sign Out of Netflix</p>
            </div>
            </div>
            

        </div>
    </div>
  )
}

export default Navbar