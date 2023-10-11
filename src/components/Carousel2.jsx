import './Styles/caousel1.css'
import { useEffect, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'


const Carousel2 = () => {
    const [scroll, setScroll] = useState(10)


    const handlePrev = () => {
        if (scroll > 10 && scroll > 13) {
            setScroll(scroll - 3)
        } else if (scroll > 10) {
            setScroll(scroll - 1)

        }
    }


    const handleNext = () => {
        if (scroll < 17 && scroll < 12) {
            setScroll(scroll + 3)
        } else if (scroll < 17) {
            setScroll(scroll + 1)
        }
    }

    console.log(scroll)


    let cardItems = [
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png",
            link: "Parsley Seed Anit-Oxidant Skin Care Kit",
            para: "A trio of Parsley Seed staples"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/6GyHPwuGxCWpuwpLLfUrST/152aa97837838aac183a693970206e78/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Small_491x261px.png",
            link: "Parsley Seed Anit-Oxidant Eye Cream",
            para: "Nourishes delicate skin around eyes"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png",
            link: "Parsley Seed Facial Cleansing Oil",
            para: "Gently liberates skin of grime and makeup"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png",
            link: "Parsley Seed Facial Cleanser",
            para: "For those in polluted urban environment"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/7jLz9UYeP6Pj3DsuBhoCsp/16bd68d17345cd9b4f718c5b6e5bb742/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Hydrating-Cream-60mL-large.png",
            link: "Parsley Seed Anit-Oxidant Facial Hydrating Cream",
            para: "A potent, noursing cream"
        },

        {
            image: "https://www.aesop.com/u1nb1km7t5q7/6MVPEkEMiRdQqfdFObezbL/5afc1ad73e9e0378ffa77add0af2edb8/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Hydrator-60mL-large.png",
            link: "Parsley Seed Anit-Oxidant Hydrator",
            para: "Light, rapidly absorbed forification"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/1BNbhQXF8YaNdESg5DDhZS/1bc8ad2cf719f65191aeb86a9b1fab82/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png",
            link: "Parsley Seed Anit-Oxidant Facial Treatment",
            para: "Fortifies, revives and intensly hydrates"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/5tohXrYPG52gI48cP9TbJR/c8fd45a7665745c81dffaf5c6b5895b2/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png",
            link: "Parsley Seed Anit-Oxidant Facial Toner",
            para: "For normal, dry and sensative skin"
        }

    ]

    useEffect(() => {

    }, [scroll])


    return (
        <>
            <div className="carousel2-component">

                <section className='carousel1card10' id='10'>
                    <h1>Parsley Seed Skin Care</h1>
                    <h2>Fortification of the highest order</h2>
                    <p>
                        Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
                    </p>

                    <p>
                        Explore the range
                    </p>
                </section>

                <div className='div22'>
                    {
                        cardItems.map((card, index) => {
                            return (
                                <section className='carousel1card2' key={index} id={index + 10}>

                                    <div className='carousel1card2-div1'>

                                        <div className='carousel1card2-img-div1'>
                                            <img src={card.image} alt="" />
                                        </div>

                                        <div className='carousel1card2-div2'>
                                            <a href="">
                                                {card.link}
                                            </a>
                                            <p>
                                                {card.para}
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>

            </div>
            <div>
                <a href={`#${scroll}`} onClick={handlePrev} className='prevlinkx' ><AiOutlineLeft /></a>
                <a href={`#${scroll}`} onClick={handleNext} className='nextlinkx'><AiOutlineRight /></a>
            </div>

        </>
    )
}

export default Carousel2