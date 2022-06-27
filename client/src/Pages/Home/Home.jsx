import { useState, useEffect } from 'react'
import React from 'react'
import './Home.css'
import Books from '../../components/Books/Books'
import SideBar from '../../components/SideBar/SideBar'
import axios from 'axios'
import {useLocation} from 'react-router'

export default function Home() {
  const [books, setBooks] = useState([]);
  const {search} = useLocation()

  useEffect(() => {
    const fetchBooks = async() =>{
      const res = await axios.get("/books"+search);
      setBooks(res.data);
      console.log(res.data);
    }
    fetchBooks()
  }, [search]);
  
  return (
    <>
      <div className="intro">
          <div><h2><q>One Stop to read all of your Favourite Books</q></h2></div>
      </div>
      <div className='content'>
        <SideBar />
        <Books books = {books} />
      </div>
    </>
  )
}
