import "./Videocard.css";
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
const Videocard = () => { 
    return (
  <div className="main-video-box">
    <div className="text-box1">
        <p className="pa1">The Athenaeum</p>
        <h2>Ouranon: the sixth Othertopias fragrance</h2>
        <p className="para">Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey. </p>
        <button>Step inside Ouranon <AiOutlineArrowRight style={{marginLeft:"50px"}} /></button>
    </div>
    <div className="video-box1">
    <video style={{height:"100%", width:"100%"}} controls>
  <source src="../assets/video1.mp4" type="video/mp4" />
</video>
    </div>
  </div>
    )
}

export default Videocard