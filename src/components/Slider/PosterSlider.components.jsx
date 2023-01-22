import React from 'react'
import Slider from 'react-slick';
import { BiChevronRight } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PosterSlider = (props) => {
    const { title, subtitle, isDark, movies } = props;
    const settings = {
        arrows: true,
        slidesToShow: 5,
        slidesToScroll:5,
        autoplay: false,
        speed: 2500,
        cssEase:"linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                    speed: 1000,

                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    speed: 1000,
                }
            }
        ]
    }


    return (
        <div className={`${isDark ? "bg-premier-500" : "bg-gray-200 md:mt-20 mt-10"} md:px-20 px-10 `}>
            <div className={`flex justify-between ${isDark ? " text-gray-100" : " text-black"}  md:mt-8 `}>
                <div className='mt-8'>
                    <h1 className='lg:text-2xl text-md font-bold '>{title}</h1>
                    <span className='text-xs md:text-lg'>{subtitle}</span>
                </div>
                <div className='hidden md:flex items-center md:text-sm text-red-400'>
                    See all <BiChevronRight />
                </div>
            </div>
            <Slider {...settings}>
                {movies.map((each) => {
                    return <><Link to={`/movie/${each.id}`}><div className='md:mx-3 md:p-4 p-3'>
                        <img src={`https://image.tmdb.org/t/p/original/${each.poster_path}`} alt="movieImg" className='my-3 rounded-lg' />
                        <h1 className={`md:text-lg md:mt-5 text-sm text-center ${isDark ? " text-gray-100" : " text-black"} `}>{each.title}</h1>
                    </div></Link></>
                })}
            </Slider>
        </div>
    )
}

export default PosterSlider;