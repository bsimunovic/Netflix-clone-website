import React, { useContext } from 'react';
import { Footer } from '../components/Footer';
import { HomeBanner } from '../components/HomeBanner';
import { MovieRow } from '../components/MovieRow';
import { MoviesDataContext } from '../context/MoviesDataContext';



export function HomePage(){
    const moviesContext = useContext(MoviesDataContext);
    return(
        <>

        <div className='relative'>
            <HomeBanner movies={ [moviesContext.popularMovies[0],moviesContext.popularMovies[1],moviesContext.popularMovies[2]] } />
            <div className='absolute top-[55vh] pl-[10%] h-[300px] w-full'>
                <MovieRow rowTitle={"Popular on Netflix"} movies={moviesContext.popularMovies} />
                <MovieRow rowTitle={"Top Rated on Netflix"} movies={moviesContext.topRatedMovies} />
                <MovieRow rowTitle={"Trending on Netflix"} movies={moviesContext.trendingMovies} />
                <MovieRow rowTitle={"Upcoming on Netflix"} movies={moviesContext.upcomingMovies} />
            </div>
            <div className='bg-black h-[90vh] w-full z-0'></div>
        </div>
        </>
    )
}