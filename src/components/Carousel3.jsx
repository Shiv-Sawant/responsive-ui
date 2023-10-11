import { useEffect, useState } from 'react'
import './Styles/carousel3.css'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'




const Carousel3 = () => {
  const [scroll, setScroll] = useState(20)


  const handlePrev = () => {
    if (scroll > 20) {
      setScroll(scroll - 1)
    } else if (scroll === 20) {
      setScroll(22)
    }
  }


  const handleNext = () => {
    if (scroll < 22) {
      setScroll(scroll + 1)
    } else if (scroll === 22) {
      setScroll(20)
    }
  }

  useEffect(() => {

  }, [scroll])

  return (
    <div className="carousel3">
      <div className='carousel3-div1'>
        <h2>Store locator</h2>

        <p className='p31'>
          Our consultants are available to host you in-store and  provide tailored guidance on gift purchases.
        </p>
        <button>
          <p>    Find a nearby store</p><><BsArrowRight /></>
        </button>
      </div>

      <div className='carousel3main'>
        <img id='20' src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg" alt="" />
        <img id='21' src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" alt="" />
        <img id='22' src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg" alt="" />
      </div>
      <a href={`#${scroll}`} onClick={handlePrev} className='prevlinkxx' ><AiOutlineLeft /></a>
      <a href={`#${scroll}`} onClick={handleNext} className='nextlinkxx'><AiOutlineRight /></a>
      {/* <p style={{color: "gray"}}>Aesop Fashion Walk</p> */}
    </div>
    
  )
}

export default Carousel3