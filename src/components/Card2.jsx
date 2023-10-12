import React from 'react';
import "./Styles/Card2.css"
import img1 from "../assets/cardimg2.avif"
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight } from 'react-icons/bs';
const Card2 = () => {
    return (
        <div className="card2-container">
            <div className="card2-box1">
                <img className='card2image' src={img1} alt="" />
            </div>
            <div className="card2-box2">
                <div>
                    <p className='p4'>Facial Appointments</p>
                    <h2>Composure for the skin and senses</h2>
                    <p className='p3'>For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance,stimulate and intensely nourish the skin.</p>
                    <button>
                        <p> Learn More   </p><><BsArrowRight /></>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card2;