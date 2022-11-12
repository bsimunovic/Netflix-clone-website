import React from 'react';

export function Navbar(){

    return(
        <>
        <div className='h-[60px] w-full bg-black top-0'>
            <div className='flex flex-row justify-around items-center'>
                <div className='flex flex-row justify-start basis-1/2 py-2'>
                    <img className='object-contain h-[100%] w-[90px]' src={require('../images/logo.png')} alt='logo'/>
                    <div className='text-blue-50 mr-2'>
                        Home
                    </div>
                    <div className='text-blue-50 mr-2'>
                        TV Shows
                    </div>
                    <div className='text-blue-50 mr-2'>
                        Originals
                    </div>
                    <div className='text-blue-50 mr-2'>
                        Movies
                    </div>
                    <div className='text-blue-50 mr-2'>
                        Recently Added
                    </div>
                    <div className='text-blue-50'>
                        My list
                    </div>
                </div>
                <div className='flex flex-row justify-end basis-1/4 py-2'>
                    <div className='text-blue-50 mr-2'>
                        Search
                    </div>
                    <div className='text-blue-50 mr-2'>
                        Notifications
                    </div>
                    <div className='text-blue-50 '>
                        Account
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}