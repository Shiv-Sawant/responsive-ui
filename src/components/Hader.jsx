import React from 'react'
import  "./Styles/hader.css";
import { Link } from 'react-router-dom';
import {CiSearch}  from "react-icons/ci";
const Hader = () => {
  return (
    <div className="hader-container">
       <div className="box1">
        <ul>
            <li><a href=''>Skin Care</a></li>
            <li><a href=''>Body & Hand</a></li>
            <li><a href=''>Hair</a></li>
            <li><a href=''>Fragrance</a></li>
            <li><a href=''>Home</a></li>
            <li><a href=''>Kit & Travel</a></li>
            <li><a href=''>Gifts</a></li>
            <li><a href=''>Read</a></li>
            <li><a href=''>Stores</a></li>
            <li><a href=''>Facial Appointments</a></li>
            <li style={{marginLeft:"10px", marginBottom:"5px"}}><a href=''><CiSearch style={{height:"20px", width:"20px"}}/></a></li>
        </ul>
        </div> 
       <div className="box2">
        <ul> 
            <li><a href="">Log in</a></li>
            <li><a href="">Cabinet</a></li>
            <li><a href="">Cart</a></li>
        </ul>
       </div>
    </div>
  )
}

export default Hader