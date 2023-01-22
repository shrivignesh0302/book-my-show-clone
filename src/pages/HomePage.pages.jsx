import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HeroCarousel from '../components/HeroCarousel.components';
import Entertainmentcard from '../components/Slider/Entertainmentcard.components';
import PosterSlider from '../components/Slider/PosterSlider.components';
import DefaultLayout from '../Hocs/DefaultLayout.hoc';

const HomePage = () => {
    const [recommmendedMovies, setRecommendedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    
    useEffect( ()=>{
        const getRecommendedMovies = async ()=>{
        const getRecommendedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=056de9240cf34988d187ed1c2bb3f382");
        setRecommendedMovies(getRecommendedMovies.data.results);
        }
        getRecommendedMovies();
    },[])
    useEffect( ()=>{
        const getPopularMovies = async ()=>{
        const getPopularMovies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=056de9240cf34988d187ed1c2bb3f382");
        setPopularMovies(getPopularMovies.data.results);
        }
        getPopularMovies();
    },[])
  
    return (
        <div>
            <HeroCarousel />
            <Entertainmentcard />
            <div className='my-3 bg-premier-500'>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="" className='px-20 hidden md:block' />
                <PosterSlider
                    isDark={true}
                    title="Premiers"
                    subtitle="Brand new releases every week"
                    movies = {popularMovies}
                     />
            </div>
            <PosterSlider
                isDark={false}
                title="Recommended Movies"
                subtitle="List of recommended movies" 
                movies = {recommmendedMovies}/>
        </div>
    )
}

export default DefaultLayout(HomePage);
