import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'

export default function Add() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [link, setLink] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const newBook = {
            title,
            author,
            link,
            desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now()+file.name;
            data.append("name", filename);
            data.append("file", file);
            newBook.photo = filename;
            try{
                await axios.post("/upload", data)
            }
            catch(err){

            }
        }
        try{
            const res = await axios.post("/books", newBook);
            window.location.replace("/book/" + res.data._id)
        }
        catch(err){

        }
    }

  return (
    <div className="addb">
        <form className="addnew" onSubmit={handleSubmit}>
            <div className="abinfo">
                <label htmlFor="bookImg">
                    <i className="bookImgIc fa-solid fa-plus"></i>
                </label>
                <input type="file" id="bookImg" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
                <input type="text" placeholder="Book Title" className="abtitle" autoFocus={true} onChange={(e) => setTitle(e.target.value)}/><br />
                <input type="text" placeholder="Author Name" className="abauthor" onChange={(e) => setAuthor(e.target.value)}/><br />
                <input type="text" placeholder="Link for Reading Book" className="ablink" onChange={(e) => setLink(e.target.value)}/>
            </div>
            <div className="abdesc">
                <textarea placeholder="Book Description" type="text" className="writeDesc" onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>
            <button type="submit" className="abSubmit">Submit</button>
        </form>
    </div>
  )
}
