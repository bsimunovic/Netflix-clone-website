import React, { useState, useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs'

type HomeBannerProps = {
    movies: any[2],
}

export function HomeBanner({movies}: HomeBannerProps){

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = movies.length;
    var img = `https://image.tmdb.org/t/p/original/${movies[currentSlide]?.backdrop_path}`;
    var title = movies[currentSlide]?.title;
    var rating = movies[currentSlide]?.vote_average + "/10 ";
    var release_date = movies[currentSlide]?.release_date;
    var overview = movies[currentSlide]?.overview;

    const autoScroll = true;
    var slideInterval: any;
    var intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
        auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const truncateString = (str: string, num: number) =>{
        if(str?.length > num){
            return str.slice(0, num) + '...';
        }else{
            return str;
        }
    }

    return(
        <>
        <div className='relative h-[90vh] w-full'>
            <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
            <img className='h-full w-full bg-cover' src={img} alt={title}></img>

            <div className='absolute top-[12%] left-[10%] lg::text-7xl md:text-5xl sm:text-3xl text-white font-bold max-w-[40%]' >
                    {title}
            </div>
            <div className='flex flex-row absolute top-[30%] left-[10%] lg:text-xl md:text-base sm:text-sm text-white font-bold'>
                <div className='flex flex-row mr-8'>{rating} <AiFillStar className='h-6 w-6 ml-1 mt-1'/></div>
                <div className=''> {release_date} </div>
            </div>
            <div className='flex flex-row absolute top-[35%] left-[10%] lg:text-base md:text-sm sm:text-[11px] text-white font-bold max-w-[35%]'>
                {truncateString(overview, 250)}
            </div>
            <div className='flex flex-row absolute top-[53%] left-[10%] lg:text-base text-white font-bold'>
                <button className='bg-red-600 text-white flex flex-row px-6 rounded-l-xl rounded-r-xl text-bold py-1 justify-center items-center mr-8'> 
                    <BsFillPlayFill className='h-6 w-6 mr-1' /> 
                    PLAY
                </button>
                <button className='bg-gray-500 text-white flex flex-row px-6 rounded-l-xl rounded-r-xl text-bold py-1 justify-center items-center mr-8'> 
                    +MY LIST
                </button>
            </div>
            
        </div>
        
        
        </>
    )
}