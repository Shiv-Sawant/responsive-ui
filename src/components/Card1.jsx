import React from 'react';
import "./Styles/Card1.css"
// import  "./Styles/Card2.css";
import img1 from "../assets/cardimg1.avif"
import { AiOutlineArrowRight } from "react-icons/ai";
const Card1 = () => {
    return (
<div className="card-main-box">
    <div className="card-box1">
        <img className='img1' src={img1} alt="error"  />
    </div>
    <div className="card-box2">
        <div>
        <h2>Efficacious pairings</h2>
        <p>Our consultants have long combined  complementary formulations to effect <br /> additional  benefits for the skin. Incorporate this time-honoured  practice<br /> into your regimen with our recommended  bundles.</p>
        <button><p>Browse Skin Care Bundles</p> <AiOutlineArrowRight style={{marginLeft:"20px"}}/></button>
        </div>
    </div>
</div>
    )
}

export default Card1;