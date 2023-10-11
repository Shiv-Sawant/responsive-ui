import React from 'react'
import "./Styles/footer.css"
import { FiArrowUpRight } from "react-icons/fi";    
import {BsInstagram} from "react-icons/bs";
import {TfiTwitter} from "react-icons/tfi";
import {AiOutlineFacebook} from "react-icons/ai";

const Footer = () => {
    return (
        <>
        <div className="footer-container">
            <div className="footerbox">
                <div className="footer-main-left">
                    <div className='left-first-box'>
                        <p>Subscribe to Aesop communications</p>
                        <hr />
                        {/* <div className='blank_div'></div> */}
                        <div className='footer-input'>
                            <input type="email" placeholder='Email address' />
                            <br />
                            {/* <br /> */}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label"  style={{ fontSize: "inherit", fontWeight: 400 }}>
                                    Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.
                                </label>
                            </div>
                            <br />
                            <div className="left-second-box">
                                <p>Sustainability</p>
                                <hr />
                                <p> All Aesop products are vegan, and we do not test our formulations  or <br /> ingredients on animals. We are Leaping Bunny approved and a Certified B <br /> Corporation. Learn more</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="footer-main-right">
                    <div className="footer-box1">
                        <p>Orders and support</p>
                        <hr />
                        <ul>
                            <li><a href="">Contact us <FiArrowUpRight/> </a></li>
                            <li><a href="">FAQs  <FiArrowUpRight/></a></li>
                            <li><a href="">Shipping <FiArrowUpRight/> </a></li>
                            <li><a href="">Returns <FiArrowUpRight/> </a></li>
                            <li><a href="">Order history <FiArrowUpRight/></a></li>
                            <li><a href="">Terms and conditions <FiArrowUpRight/></a></li>
                        </ul>

                        <p className='p1' style={{ marginTop: "58px" }}>About</p>
                        <hr />
                        <ul>
                            <li><a href="">Our story </a></li>
                            <li><a href="">Foundation </a></li>
                            <li><a href="">Careers </a></li>
                            <li><a href="">Privacy policy </a></li>
                            <li><a href="">Accessibility </a></li>
                            <li><a href="">Cookie Policy </a>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-box2">
                        <p >Services</p>
                        <hr />
                        <ul>
                            <li><a href="">Live assistance </a></li>
                            <li><a href="">Corporate gifts </a></li>
                            <li><a href="">Facial Appointments </a></li>
                            <li><a href="">Click and Collect </a></li>
                            <li><a href="">Video consultation </a></li>

                        </ul>
                        <br />

                        <p style={{ marginTop: "50px" }}>Social media</p>
                        <hr />
                        <ul>
                            <li><a href="">Instagram <FiArrowUpRight/></a></li>
                            <li><a href="">Twitter <FiArrowUpRight/></a></li>
                            <li><a href="">LinkedIn <FiArrowUpRight/></a></li>
                            <li><a href="">WeChat <FiArrowUpRight/></a></li>
                            <li><a href="">Weibo <FiArrowUpRight/></a></li>

                        </ul>
                    </div>
                    <div className="footer-box3">
                        <p>Location preferences</p>
                        <hr />
                        <ul>
                            <li><a href="">Shipping: </a></li>
                            <li><a href="">Hong Kong SAR, China </a></li>
                            <li><a href="">Language: </a></li>
                            <li><a href="">English </a></li>
                            <li><a href="">繁體中文 </a></li>
                        </ul>
                    </div>
                    
                </div>

            </div>
           
            <br />
            <hr />
            <div className='horizontal' style={{ border: "1px solid white", marginTop:"50px" }}>
            </div>
            <div className='copy-right'>
            <p style={{ marginTop: "20px", marginLeft: "25px", fontSize: "18px", color: "white" }}>&copy;  Aesop</p>
            <div className="socialmedia">
                <div className="icons"><BsInstagram/></div>
                <div className="icons"><TfiTwitter/></div>
                <div className="icons"><AiOutlineFacebook/></div>
            </div>

            </div>
            




        </div>
         {/* <div className="smsicon">
                
         </div> */}
         </>
    )
}

export default Footer