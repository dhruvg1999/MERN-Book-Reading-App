import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='nav'>
        <Link to="/" style={{textDecoration: "none", color: "inherit"}}><div className='left'><h3>BOOKS4U</h3></div></Link>
        <div className='center'>
            <div className='nav-opt'><Link to="/" style={{textDecoration: "none", color: "inherit"}}>Home</Link></div>
            <div className='nav-opt'><Link to="/about" style={{textDecoration: "none", color: "inherit"}}>About</Link></div>
            <div className='nav-opt'><a href="mailto:dhruv.extras16@gmail.com" style={{textDecoration: "none", color: "inherit"}}>Suggestions</a></div>
            <div className='nav-opt'><Link to="/add" style={{textDecoration: "none", color: "inherit"}}>Add a Book</Link></div>
        </div>
        <div className='right'>
            <a href= "mailto:dhruv.extras16@gmail.com">
                <i class="fa-solid fa-envelope"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.github.com">
                <i class="fa-solid fa-code"></i>
            </a>
        </div>
    </div>
  )
}
