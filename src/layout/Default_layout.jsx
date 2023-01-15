import React from 'react';
import Navbar from '../Components/Navbar/Navbar_Component'

const DefaultLayoutHoc = (Component) =>({...Props}) => {
  return (
    <div>    
    <Navbar/>
    <Component {...Props}/>
    <div>Footer</div>
    </div>
  )
}

export default DefaultLayoutHoc;