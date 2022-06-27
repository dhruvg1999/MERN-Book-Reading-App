import React from 'react'
import './SingleBook.css'
import {useLocation} from 'react-router'
import { useEffect, useState } from 'react'
import axios from "axios"

export default function SingleBook() {
    const PF = "http://localhost:5000/images/"
    const location = useLocation()
    const path = location.pathname.split("/")[2];

    const [book, setBook] = useState({})


    useEffect(() => {
        const getBook = async ()=>{
            const res =await axios.get("/books/" + path)
            setBook(res.data)
        }
        getBook()
    }, [path])

    const handleDelete = async()=>{
        try{
            await axios.delete("/books/"+path);
            window.location.replace("/")
        }
        catch(err){}
    }
    return (
        <div className='singlebook'>
            <div className="singleBookWrapper">
                <div className="sbhead">
                    <div className='info'>
                        <div className='sbtitle'>{book.title}</div>
                        <div className='sbauthor'>- {book.author}</div>
                    </div>
                    <div className="sbedit">
                        <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
                    </div>
                </div>
                <div className='cover'>
                    {book.photo && <img src={PF+book.photo} alt="Book Cover" className="bookImg" />}
                </div>
            </div>
            <div className="sbdesc">
                <div className="sbhead">Description</div>
                    <span>
                        {book.desc} <br /> To read, <a href={book.link}>Click Here</a> 
                    </span>

            </div>
        </div>
    )
}
