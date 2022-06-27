import React from 'react'
import './Books.css'
import Book from '../Book/Book'

export default function Books({books}) {
  return (
    <div className='books'>
      {books.map(b=>(
        <Book book={b}/>
      ))}
    </div>
  );
}
