import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <div className="hlogo"><Link to="/" style={{textDecoration: "none", color: "inherit"}}><img src={require('../../assets/Logo.png')} className="App-logo" alt="logo" /></Link>
      <Link to="/" style={{textDecoration: "none", color: "inherit"}}><h1>BOOKS4U</h1></Link></div>
    </div>
  )
}
