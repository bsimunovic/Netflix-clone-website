import React, { Children, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import request from '../requests.js'

export const MoviesDataContext = createContext<MovieInterface>({
    popularMovies: [],
    topRatedMovies: [],
    trendingMovies: [],
    upcomingMovies: [],
});

type MovieInterface = {
    popularMovies: any,
    topRatedMovies: any,
    trendingMovies: any,
    upcomingMovies: any,
}

type MoviesDataProviderProps = {
    children: React.ReactNode,
}


export const MoviesDataContextProvider = ({children}: MoviesDataProviderProps) => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(()=>{
        axios.get(request.requestPopular).then((response) => {
            setPopularMovies(response.data.results);
        })
        axios.get(request.requestTopRated).then((response) => {
            setTopRatedMovies(response.data.results);
        })
        axios.get(request.requestTrending).then((response) => {
            setTrendingMovies(response.data.results);
        })
        axios.get(request.requestUpcoming).then((response) => {
            setUpcomingMovies(response.data.results);
        })
    }, [])

    return (
        <MoviesDataContext.Provider value={{popularMovies, topRatedMovies, trendingMovies, upcomingMovies}}>
            {children}
        </MoviesDataContext.Provider>
    )
}
