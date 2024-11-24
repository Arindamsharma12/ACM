import React from "react";
import './navbar.css'
import img from '../../img/coding.jpg'
const Navbar = ()=>{
  return(
    <>

      <ul className="nav-section">
      <div className="logo">logo</div>
        <li>Home</li>
        <li>Event</li>
        <li>New & Announcement</li>
        <li>Quiz</li>
      </ul>
      <div><img src={img} alt="" /></div>
    </>
  )
}

export default Navbar;