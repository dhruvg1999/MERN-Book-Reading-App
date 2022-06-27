import React from 'react'
import './SideBar.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCat = async ()=>{
      const res = await axios.get("/categories")
      setCat(res.data)
    }
    getCat()
  }, [])
  
  return (
    <div className='sidebar'>
        <div className="sbcat">
            <span className="sidetitle"><br/><h2>Choose Your Genre</h2><br/></span>
            {cat.map((c) => (
              <Link to={`/?cat=${c.name}`} style={{textDecoration: "none", color: "inherit"}}>
                 <div className="opt">{c.name}</div>
              </Link>
            ))}
        </div>
    </div>
  )
}
