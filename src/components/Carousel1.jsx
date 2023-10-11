import './Styles/caousel1.css'
import { useEffect, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'


const Carousel1 = () => {
    const [scroll, setScroll] = useState(2)


    const handlePrev = () => {
        if (scroll > 0 && scroll > 3) {
            setScroll(scroll - 3)
        } else if (scroll > 0) {
            setScroll(scroll - 1)

        }
    }


    const handleNext = () => {
        if (scroll < 6 && scroll < 2) {
            setScroll(scroll + 3)
        } else if (scroll < 6) {
            setScroll(scroll + 1)
        }
    }

    console.log(scroll)


    let cardItems = [
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/4xJBSrjM8KCIc1c98Y2V08/38105def050ed90c4f47b58a22c32f97/Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
            link: "Miracety Eau de Parfum",
            para: "Resinous, woody, spicy, fragrance"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/VnDxAIvveYbYoWhbDDnDg/6a367f2ca45ae06497751c2e1f750df2/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Medium_800x781px.png",
            link: "Karst Eau de Parfum",
            para: "Fresh, harbaceous, marine, fragrance"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/VnDxAIvveYbYoWhbDDnDg/6a367f2ca45ae06497751c2e1f750df2/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Medium_800x781px.png",
            link: "Karst Eau de Parfum",
            para: "Fresh, harbaceous, marine, fragrance"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/VnDxAIvveYbYoWhbDDnDg/6a367f2ca45ae06497751c2e1f750df2/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Medium_800x781px.png",
            link: "Karst Eau de Parfum",
            para: "Fresh, harbaceous, marine, fragrance"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/VnDxAIvveYbYoWhbDDnDg/6a367f2ca45ae06497751c2e1f750df2/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Medium_800x781px.png",
            link: "Karst Eau de Parfum",
            para: "Fresh, harbaceous, marine, fragrance"
        },
        // {
        //     image:"https://www.aesop.com/u1nb1km7t5q7/1mMB0Lyr5i2SgYQMASDBy3/d2b0ff186b202ed3419d0d4d6e4a1935/Aesop-Geranium-Leaf-Duet-with-Product-Medium-1238x752px.png",
        //     link:"Geranium Leaf Duet",
        //     para:"A gentle cleanser and aromatic balm"
        // },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/63uxxW6BmksivC8FPZZ52n/e87bef778441aa4449bafa7bfea2288d/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Front_Medium_800x781px.png",
            link: "Eidesis Eau de Parfum",
            para: "Woody, spicy, ambery"
        }

    ]

    useEffect(() => {

    }, [scroll])


    return (
        <>
            <div className="carousel1-component">

                <section className='carousel1card1' id='0'>
                    <h1>Fragrance</h1>
                    <h2>Our personal scents</h2>
                    <p>
                        Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.
                    </p>

                    <p>
                        See all Fragrance
                    </p>
                </section>
                <div style={{display:"flex"}}>
                    {
                        cardItems.map((card, index) => {
                            return (

                                <section className='carousel1card2' key={index} id={index + 1}>

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
                <a href={`#${scroll}`} onClick={handlePrev} className='prevlink' ><AiOutlineLeft /></a>
                <a href={`#${scroll}`} onClick={handleNext} className='nextlink'><AiOutlineRight /></a>
            </div>

        </>
    )
}

export default Carousel1