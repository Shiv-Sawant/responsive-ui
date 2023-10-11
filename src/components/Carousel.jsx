import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/crousel.css'; // You can create your own CSS for styling
import './Styles/carousel.css'
import Carousels from 'react-material-ui-carousel'
import { BsFillPlayFill } from 'react-icons/bs'
import { BsPause } from 'react-icons/bs'
import { FaEquals } from 'react-icons/fa'

const Carousel = () => {
    const [pageNum, setPageNum] = useState(1)
    const [autoPlays, setAutoPlays] = useState(true)
    const [opens, setIsOpens] = useState(false)

    var items = [
        {
            name: "Random Name #1",
            image: "https://www.aesop.com/u1nb1km7t5q7/u3xwLdwyHOhnFjFDnp9xh/78ae09241ad257722205bb61089ab46a/Aesop_Othertopias_2023_Web_Homepage_3_Primary_Full_Bleed_Desktop_2880x1044px.jpg",
            heading1: "Aesop",
            heading3: "A new Othertopias fragrance",
            heading4: "Ouranon Eau de Parfum",
            para: "A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.",
            buttonpara: " Discover Ouranon",
            icon: "icon"
        },
        {
            name: "Random Name #2",
            image: "https://www.aesop.com/u1nb1km7t5q7/6gh1BfrwUWExsAYoI9MhxK/56b784ae98ed3421486a09e0c112bdea/Aesop_Bar_Soaps_2023_Web_Homepage_1_Primary_Full_Bleed_Desktop_2880x1044px.jpg",
            heading1: "Aesop",
            heading3: "A new Othertopias fragrance",
            heading4: "Ouranon Eau de Parfum",
            para: "A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.",
            buttonpara: " Discover Ouranon",
            icon: "icon"
        },
        {
            name: "Random Name #3",
            image: "https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg",
            heading1: "Aesop",
            heading3: "A new Othertopias fragrance",
            heading4: "Ouranon Eau de Parfum",
            para: "A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.",
            buttonpara: " Discover Ouranon",
            icon: "icon"
        }
    ]

    const handlePrev = () => {
        console.log(i, "i")
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
        else {
            setPageNum(3)
        }
    }

    const handleNext = () => {
        if (pageNum < 3) {
            setPageNum(pageNum + 1)
        }
        else {
            setPageNum(1)
        }
    }

    console.log(pageNum)

    useEffect(() => {

    }, [autoPlays])

    return (
        <>
            {/* {
                opens &&
                <>
                    <div className='car-slider'>
                        sfd
                    </div>
                </>
            } */}
            <div className='carousel-component'>
                {/* <div className='car-button' onClick={() => setIsOpens(!opens)}><FaEquals /></div> */}

                <Carousels
                    autoPlay={autoPlays}
                    indicators={false}
                    prev={"number"}
                    NavButton={({ onClick, className, style, next, prev, index, ...rest }) => {
                        return (
                            <>
                                <div>
                                    <button onClick={() => { onClick(), handlePrev() }} className={className} style={style}>
                                        {prev && "<"}
                                    </button>
                                    <h5>
                                        <p>
                                            {pageNum}
                                        </p>
                                        /
                                        <p>
                                            {items.length}
                                        </p>
                                    </h5>
                                    <button onClick={() => { onClick(), handleNext() }} className={className} style={style}>
                                        {next && ">"}
                                    </button>

                                </div>
                            </>
                        )
                    }}
                >
                    {
                        items.map((item, i) => {
                            return (
                                <>

                                    <img onChange={() => setPageNum(i + 1)} key={i} src={item.image} alt={`${i} slide`} />
                                    <div className='upperimgcontent'>
                                        <div className='upperimgcontent-div1'>
                                            <h1>{item.heading1}</h1>
                                        </div>
                                        <div className='upperimgcontent-div2'>
                                            <h3>{item.heading3}</h3>
                                            <h4>{item.heading4}
                                            </h4>
                                            <p className='c1p1'>
                                                {item.para}
                                            </p>
                                            <button>
                                                <p> {item.buttonpara}</p> {item.icon}</button>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }

                </Carousels>
                <button className='carousel-autoplay' onClick={() => setAutoPlays(!autoPlays)}>
                    {
                        autoPlays ?
                            <BsPause className='pause' />
                            :
                            < BsFillPlayFill className='play' />

                    }
                </button>
            </div>
        </>

    );
};

export default Carousel;
