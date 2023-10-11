import React, { useState, useEffect } from 'react'
import { RxCross1 } from "react-icons/rx";
import "./Styles/Drawer.css";
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from '../components/Carousel';
import Carousel1 from '../components/Carousel1';
import Hader from './Hader';
import Footer from './Footer';
import Videocard from './Videocard';
import Card1 from './Card1';
import Card2 from './Card2';
import Message from './Message';
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';
const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className={`left-drawer ${isOpen ? 'open' : 'closed'}`}>


                <div onClick={toggleDrawer} className="crossbutton ">
                    <RxCross1 />
                </div>

                {/* Main Content */}
                <div className={`main-content ${isOpen ? 'open' : ''}`}>
                    <p style={{ color: "black" }}>Shipping fees and delivery times</p>
                    <hr />
                    <br />
                    {/* <br /> */}
                    <div className='main-content-box'>
                        <p>SF Express (Hong Kong SAR, China)</p>
                        <div className="content-div-box">
                            <div className="leftbox">
                                <p>Orders below $400</p>
                                <p>Orders $400 and over</p>
                                <p>Urban areas</p>
                                <p>Outlying Islands</p>
                            </div>
                            <div className="rightbox">
                                <p>$40</p>
                                <p>Complimentary</p>
                                <p>2-3 business days</p>
                                <p>3-5 business days</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <div className='main-content-box'>
                        <p>Morning Global (Macau SAR, China)</p>
                        <div className="content-div-box">
                            <div className="leftbox">
                                <p>Orders below $400</p>
                                <p>Orders over $400</p>
                                <p>All areas</p>
                                <p className='spl'>Regrettably we are unable to accept orders containing Dangerous Goods to Macau SAR, China.s</p>
                            </div>
                            <div className="rightbox">
                                <p>$60</p>
                                <p>Complimentary</p>
                                <p>5-7 business days</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='main-content-box'>
                        <p>Complimentary samples</p>
                        <div className="content-div-box">
                            <div className="leftbox">

                                <p>All online orders include complimentary samples. At checkout, select from the available bundles to add them to your order.</p>
                            </div>

                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='main-content-box'>
                        <p>Click and Collect</p>
                        <div className="content-div-box">
                            <div className="leftbox">
                                <p>Simply choose in-store collection at checkout, then pick up your order at your preferred location.</p>
                                <p>For general enquiries regarding Click and Collect, we welcome you to phone us on +852 3001 6734 instead of contacting your local store.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='main-content-box'>
                        <p>Returns</p>
                        <div className="content-div-box">
                            <div className="leftbox">
                                <p>Online purchases may be returned to us or any Aesop Stores within 30 days.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='main-content-box'>
                        <p>Carbon neutral shipping</p>
                        <div className="content-div-box">
                            <div className="leftbox">
                                <p>We offset operational emissions to ensure the delivery of every order is carbon neutral.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* drawer handler  */}
            <div className="drawercontainer">
                <p onClick={toggleDrawer} type='text' >
                    Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on orders over $400.  <span>  +   </span>
                </p>
            </div>
            <Hader />
            <Carousel />
            <Videocard/>
            <Carousel1 />
            <Card1/>
            <Carousel2 />
            <Carousel3/>
            <Card2/>
            <Message/>
            <Footer/>

        </>
    )
}

export default Drawer