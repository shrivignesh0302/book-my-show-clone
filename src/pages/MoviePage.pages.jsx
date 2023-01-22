import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MoviePageHoc from "../Hocs/MoviePage.hoc";
import axios from "axios";
import { HiStar, HiChevronRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import CastSlider from "../components/Slider/castSlider.components";

const MoviePage = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const getMovie = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=056de9240cf34988d187ed1c2bb3f382`
      );
      setMovie(getMovie.data);
      setGenres(getMovie.data.genres);
    };
    getMovie();
  }, []);

  let runtime = movie.runtime;

  let hours = Math.floor(runtime / 60);

  let min = runtime % 60;

  let releaseDate = new Date(movie.release_date);
  const options = { year: "numeric", month: "short", day: "numeric" };



  return (
    <>
      <div
        className="sm:w-full sm:h-52 md:h-96 bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="w-full h-full from-black bg-gradient-to-r flex flex-col gap-6 md:flex">
          <div className="h-full">
            <div className="flex gap-3 text-gray-50">
              <div className="sm:p-4 px-1">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  className="w-56 hidden md:flex"
                />
              </div>
              <div>
                <div className="p-3 text-2xl font-semibold">
                  {movie.original_title}
                </div>
                <div className="flex items-center gap-3 md:text-lg text-sm hover:cursor-pointer">
                  <HiStar className="text-3xl text-red-400" />
                  <div>
                    {movie.vote_average}
                    <span className="mx-1">/10</span>
                  </div>
                  <div className="text-xs flex items-center ">
                    {movie.vote_count} <span className="ml-1">votes</span>{" "}
                    <HiChevronRight />
                  </div>
                </div>
                <div className="bg-darkBackground-700 rounded-lg p-2 my-2 hidden md:flex ">
                  <div className="p-2 mx-2">
                    <h1>Add your ratings & review</h1>
                    <p className="text-gray-400">Your ratings matters</p>
                  </div>
                  <div className="flex items-center p-2">
                    <button className="px-3 py-2 bg-slate-50 rounded-lg text-black">
                      Rate now
                    </button>
                  </div>
                </div>
                <div className=" text-xs md:text-sm flex flex-wrap items-center gap-3 my-3">
                  <div >
                    {hours} hrs {min} min
                  </div>
                  <div><GiPlainCircle className="w-2" /></div>
                  {genres.map((each) => {
                    return <div>{each.name}</div>;
                  })}
                  <div><GiPlainCircle className="w-2" /></div>
                  <div>{releaseDate.toLocaleDateString("en-us", options)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 md:w-3/4">
        <h1 className="md:text-2xl font-bold">About the movie</h1>
        <p className="mt-2 px-6 text-xs md:text-lg">{movie.overview}</p>
      </div>
      <div className="m-2 h-10">
        <hr className="text-gray-500 w-3/4" />
      </div>
      <CastSlider/>
    </>
  );
};
export default MoviePageHoc(MoviePage);
