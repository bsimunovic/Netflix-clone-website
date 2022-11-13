import React from 'react';

export function DropDownAccountMenu(){
    const userImg = 'https://www.shareicon.net/data/256x256/2015/09/24/106423_user_512x512.png';

    return(
        <>
            <div className='relative text-base text-white'>
                <img className="w-[50px] h-[50px] peer rounded-full border border-gray-100 shadow-sm" src={userImg} alt="user image" />

                <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-black drop-shadow-lg z-1 absolute right-[20px] py-2">
                    {/* TODO --> based on number of connected accounts show them in account menu*/}
                    <a className='flex flex-row py-2 hover:bg-gray-600' >
                        <img className="rounded-full border border-gray-100 shadow-sm w-[30px] h-[30px] mx-4" src={userImg} alt="user image" />
                        <p>wilson</p>
                    </a>
                    <a className='flex flex-row py-2 hover:bg-gray-600' >
                        <img className="rounded-full border border-gray-100 shadow-sm w-[30px] h-[30px] mx-4" src={userImg} alt="user image" />
                        <p>Anna</p>
                    </a>
                    <a className='flex flex-row py-2 hover:bg-gray-600' >
                        <img className="rounded-full border border-gray-100 shadow-sm w-[30px] h-[30px] mx-4" src={userImg} alt="user image" />
                        <p>Kids</p>
                    </a>

                    <a className="px-3 py-2 hover:bg-gray-600 border-b-4 border-gray-700" href="#">Manage Profile</a>
                    <a className="px-3 py-2 hover:bg-gray-600" href="#">Account</a>
                    <a className="px-3 py-2 hover:bg-gray-600" href="#">Help Center</a>
                    <a className="px-3 py-2 hover:bg-gray-600" href="#">Sign out of Netflix</a>
                </div>
            </div>
        </>
    )
}