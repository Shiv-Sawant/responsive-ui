import { useState } from 'react'
import './App.css'
import Tab from "./components/Tab";
import Drawer from './components/Drawer';
import { LiaSmsSolid } from 'react-icons/lia'
import { FaEquals } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs'


function App() {
  const [count, setCount] = useState(0)
  const [opens, setIsOpens] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      {
        opens ?
          <>
            <div className='car-slider'>
              <div className='carslidnav'>
                <h1>Aesop</h1>
                <div>
                  <BiSearch />
                </div>
                <div>
                  <AiOutlineHeart />
                </div>
                <div>
                  Cart
                </div>
                <div onClick={() => setIsOpens(!opens)}>
                  <GrFormClose />
                </div>
              </div>

              <div className='carslidnav2'>
                <div>Skin Care <BsArrowRight /></div>
                <div>Body & Hand <BsArrowRight /></div>
                <div>Hair <BsArrowRight /></div>
                <div>Fragrance <BsArrowRight /></div>
                <div>Home <BsArrowRight /></div>
                <div>Kits & Travel <BsArrowRight /></div>
                <div>Gifts <BsArrowRight /></div>
              </div>

              <div className='carslidnav3'>
                <div>
                  <p>Read</p>
                  <p>Stores</p>
                  <p>Facial Appointments</p>
                </div>

                <div>
                  <p>Log In</p>
                  <p>Live assistance</p>
                </div>
              </div>

              <div className='carslidnav4'>

                <div className='carslidnav41'>
                  <div><img src="https://www.aesop.com/u1nb1km7t5q7/4kSDLzh5HJnqgxUaNfakWh/6e24587114d708948c4d506aba4503eb/Aesop_Othertopias_2023_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg" alt="" /></div>
                  <div><h1>Lessons form the lab</h1></div>
                  <div><p>Ouranon Eau de Parfum: the final chapter of Othertopias</p></div>
                </div>

                <div className='carslidnav41'>
                  <div><img src="https://www.aesop.com/u1nb1km7t5q7/4hIbfbPvniYDgJ9geoFA7F/dbe9b398fddfb8986feeb119ca2545f7/Aesop_Bar_Soaps_2023_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg" alt="" /></div>
                  <div><h1>Lessons form the lab</h1></div>
                  <div><p>Bath time for grown-ups: Aesop Bar Soaps</p></div>
                </div>

                <div className='carslidnav41'>
                  <div><img src="https://www.aesop.com/u1nb1km7t5q7/2EtihBJDZdJYYKOYnQ8NGh/f683cba0bdf6ae5f4a58b88b50d2d583/Aesop_Gloam_2023_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg" alt="" /></div>
                  <div><h1>Lessons form the lab</h1></div>
                  <div><p>The next chapter in Aesop <span>fragrance: Gloam Eau de Parfum</span></p></div>
                </div>

                <div className='carslidnav41'>
                  <div><img src="https://www.aesop.com/u1nb1km7t5q7/3iVQMxKkOpQCyAOyQJHZkj/17ea0331c38082dd63d09651d2f222ce/Aesop_Scented_Home_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg" alt="" /></div>
                  <div><h1>Habitat</h1></div>
                  <div><p>A guide to home fragrance</p></div>
                </div>

                <div className='carslidnav41'>
                  <div><img src="https://www.aesop.com/u1nb1km7t5q7/6ir7TGGy614ZikhYH5F9Df/7a546bceb483066eaefd3dd81947ad67/Aesop_Delicate_Skin_Eye_Web_Athenaeum_Thumbnail_Horizontal_Desktop_1920x1080px.jpg" alt="" /></div>
                  <div><h1>Lessons form the lab</h1></div>
                  <div><p>How to care for the delicate skin around the eyes</p></div>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <Tab />
            <Drawer />
            <div className="smsicon">
              <LiaSmsSolid />
            </div>

            <div className='car-button'>
              <div><h2>Aesop</h2></div>
              <div>
                <BiSearch />
              </div>
              <div>
                <AiOutlineHeart />
              </div>
              <div>
                <h5>Cart</h5>
              </div>
              <div onClick={() => setIsOpens(!opens)}><FaEquals /></div>

            </div >
          </>
      }


    </div>
  )
}

export default App
