import React, { useState } from 'react'
import { Carousel } from 'antd';
import './style.css'

const HeroCarousel = () => {
    const [images] = useState(["1669651782718_webpizza.jpg", "1671797467207_e3dwecd.jpeg", "1670250889873_wdfgfd.jpg", "1670502578966_web.jpg"]);
    const baseUrl = "https://assets-in.bmscdn.com/promotions/cms/creatives/";
    return (
        <div >
        <Carousel autoplay effect='fade' >
            {images.map((image, index) => {
                return (
                    <>
                        <img src={baseUrl + image} alt="img" className=' w-full h-60 object-center carousel_image' key={index.toString()} />
                    </>
                )
            })}
        </Carousel>
        </div>    )
}

export default HeroCarousel;