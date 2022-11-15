import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropDownAccountMenu } from './DropDownAccountMenu';
import { DropDownNotificationMenu } from './DropDownNotificationMenu';
import { SearchBox } from './SearchBar';

export function Navbar(){
    const activeClassName = 'underline underline-offset-[14px] decoration-red-600 decoration-2';
    

    return(
        <>
        <div className='sticky top-0 z-50 h-[90px] w-full bg-black flex flex-col justify-center'>
            <div className='flex flex-row justify-around text-gray-300 sm:text-xs md:text-sm lg:text-sm xl:text-base'>
                <div className='justify-center basis-1/8'>
                    <img className='h-[80px] w-[140px]' src={require('../images/logo.png')} alt='logo'/>
                </div>
                <div className='flex flex-row justify-start basis-1/2 items-center'>
                    <div className='mr-8 hover:underline hover:underline-offset-[14px] decoration-red-600 decoration-2'>
                        <NavLink to="/"  className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
                    </div>
                    <div className='mr-8 hover:underline hover:underline-offset-[14px] decoration-red-600 decoration-2'>
                        <NavLink to="/TVShows" className={({ isActive }) => isActive ? activeClassName : undefined}>TV Shows</NavLink>
                    </div>
                    <div className='mr-8 hover:underline hover:underline-offset-[14px] decoration-red-600 decoration-2'>
                        <NavLink to="/Originals" className={({ isActive }) => isActive ? activeClassName : undefined}>Originals</NavLink>
                    </div>
                    <div className='mr-8 hover:underline hover:underline-offset-[14px] decoration-red-600 decoration-2'>
                        <NavLink to="/Movies" className={({ isActive }) => isActive ? activeClassName : undefined}>Movies</NavLink>
                    </div>
                    <div className='mr-8 hover:underline hover:underline-offset-[14px] decoration-red-600 decoration-2'>
                        <NavLink to="/RecentlyAdded" className={({ isActive }) => isActive ? activeClassName : undefined}>Recently Added</NavLink>
                    </div>
                    <div className='hover:underline hover:underline-offset-[14px] decoration-red-600 decoration-2'>
                        <NavLink to="/MyList" className={({ isActive }) => isActive ? activeClassName : undefined}>My list</NavLink>
                    </div>
                </div>
                <div className='flex flex-row justify-end basis-1/8 py-2 items-center'>
                    <SearchBox />
                    <DropDownNotificationMenu />
                    <DropDownAccountMenu />
                </div>
            </div>
        </div>
        </>
    )
}