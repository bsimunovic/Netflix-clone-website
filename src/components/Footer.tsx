import React from 'react';
import {AiFillTwitterSquare, AiFillFacebook, AiFillApple} from 'react-icons/ai'
import {FaGooglePlusG, FaGooglePlay} from 'react-icons/fa';

export function Footer(){

    return (
        <>
            <div className='h-[150px] w-full flex flex-row relative items-center justify-between bg-black text-white px-[10%]'>
                <div className='flex flex-row'>
                    <AiFillFacebook className='h-[40px] w-[40px] mr-8' />
                    <AiFillTwitterSquare className='h-[40px] w-[40px] mr-8' />
                    <FaGooglePlusG className='h-[40px] w-[40px] mr-8' />
                </div>
                <div className='flex flex-row'>
                    <FaGooglePlay className='h-[40px] w-[40px]' />
                    <AiFillApple className='h-[40px] w-[40px] ml-8' />
                </div>
            </div>
        </>
    )
}