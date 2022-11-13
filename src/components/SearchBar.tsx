import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export function SearchBox(){
    var [active, setActive] = useState(false);

    function changeSearchBarState(){
        setActive(active = !active)
    }

    return (
        <>
            <div className='flex flex-row'>
                <button className='order-last' onClick={changeSearchBarState}>
                    <BsSearch className='w-[30px] h-[30px] mr-8' />
                </button>
                {(active !== false)?
                <input className='mr-8 py-1 px-4 text-black outline-0' type={'text'} placeholder='Search...'>
                </input>
                :
                null
                }
            </div>
            
        </>
    )
}