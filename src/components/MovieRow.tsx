import React from 'react';

type MovieRowProps = {
    rowTitle: string,
    movies: any,
}

export function MovieRow({movies, rowTitle}: MovieRowProps){
    console.log(movies);
    return(
        <>
            <div className='relative w-full pb-4'>
                <div className='text-4xl text-white text-bold py-4'>
                    {rowTitle}
                </div>
                
                <div className='w-full h-full overflow-auto scrollbar-hide whitespace-nowrap scroll-smooth relative'>
                    {movies.map((item: any, id: number) => {                  
                        return (
                            <div className='h-[200px] w-[350px] mr-3 inline-block shadow-2xl relative border-2'>
                                <img className='object-cover h-[100%] w-[100%]' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>
                                <div className='absolute p-2 w-[100%] mt-0 text-white inset-y-[160px] text-lg font-bold'>
                                    {item?.title}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
