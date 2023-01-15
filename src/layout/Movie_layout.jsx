import React, { Component } from 'react';
import MovieNavbar  from '../Components/Navbar/MovieNavbar_Component';

const MovieLayoutHoc = (Component) =>({...Props}) => {
  return (
   
    <div>
        <MovieNavbar/>
        <Component {...Props}/>
        <div>Footer</div>
    </div>
    
  )
}

export default MovieLayoutHoc; 