import React from 'react';
import"./navbar.css";
import { Link } from 'react-router-dom';
import { RiSearchLine,RiArticleLine,RiLogoutCircleLine } from "react-icons/ri";
import { ReactComponent as Logo } from "../assets/gtj-logo.svg";


const Navbarmenu = () => {
  return (
    <div className='container'>
      <Link to="/"><Logo className="logo"/></Link>
      <ul>
        <li className="list">
       
          <Link to="/login" className="navbar-items">
            <RiSearchLine className="icons"/>
            Find that job</Link>
        </li>
        <li className="list">
          <Link to="/signup" className="navbar-items">
          <RiArticleLine className="icons"/>
            Your Applications</Link>
        </li>
        <li className="list">
          <Link to="/home" className="navbar-items">
            <RiLogoutCircleLine className="icons"/>
            Log out</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbarmenu