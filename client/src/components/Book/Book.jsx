import React from 'react'
import './Book.css'
import { Link } from "react-router-dom"


export default function Book({book}) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className='book'>
      <Link to={`/book/${book._id}`} style={{textDecoration: "none", color: "inherit"}}>
        {book.photo && <img src={PF + book.photo} alt="Cover Pic" className="cover" />}
        <div className="bookinfo">
          <div className="title">
            {book.title}
          </div>
          <div className="author">
            -{book.author}
          </div>
          <div className="desc">
            {book.desc} 
          </div>
          <div className="bookCat">
            {book.categories.map(c => (
              <span className="bcat">{c} </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
