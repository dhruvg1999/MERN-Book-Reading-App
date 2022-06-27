import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import SingleBook from '../../components/SingleBook/SingleBook'
import './Single.css'

export default function Single() {
  return (
    <div className="single">
        <SideBar />
        <SingleBook />  
    </div>
  )
}
