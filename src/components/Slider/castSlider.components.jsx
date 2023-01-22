import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import Slider from 'react-slick';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" ,borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }

const CastSlider = () => {
    const settings = {
        arrows: true,
        slidesToShow: 8,
        slidesToScroll:5,
        nextArrow : <NextArrow/>
    }
    const [castDetails,setCastDetails] = useState([]);
    const {id}=useParams();
    useEffect(() => {  
        return async() => {
            const getCast = await axios.get(`http://api.themoviedb.org/3/movie/${id}/credits?api_key=056de9240cf34988d187ed1c2bb3f382`) 
            setCastDetails(getCast.data.cast);
        };
       }, [])
       
    
  return (
    <div className='px-8 md:w-3/4'>
        <div><h1 className='text-2xl font-bold'>Casts</h1></div>
        <Slider {...settings}>
            
                {castDetails.map((each)=>{
                    let checkSrc = each.profile_path;
                    const src = `https://image.tmdb.org/t/p/original/${each.profile_path}`;
                    const defaultSrc = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
                    return <>
                    <div className='flex flex-col gap-3 mt-4'>
                    <img src={checkSrc===null?defaultSrc:src} className='h-20 md:h-28 rounded-full object-fill p-2'/>
                    <span className='text-center px-2'>{each.original_name}</span>
                    </div>
                     </>
                })}
        </Slider>
    </div>
  )
}

export default CastSlider;