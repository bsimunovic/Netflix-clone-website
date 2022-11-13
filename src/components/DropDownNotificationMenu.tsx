import React from 'react';
import { BsFillBellFill } from 'react-icons/bs';


export function DropDownNotificationMenu(){
    var numberOfNotifications = 1;

    const filmUrl = 'https://styles.redditmedia.com/t5_2tyoq/styles/communityIcon_lb6c884t7lf51.png';
    const filmUrl2 = 'https://styles.redditmedia.com/t5_2xhxq/styles/communityIcon_tvzq0x19v0s01.jpg';
    const filmUrl3 = 'https://b.thumbs.redditmedia.com/m1CWbcBzjVBX-CdF49zh4ocFaJ3oTVGPhjLpIv2tyVI.png';
    return(
    <>
        <div className='relative text-xs text-white'>
            <div className='peer relative w-[30px] h-[30px] mr-8' >
                <BsFillBellFill className='peer relative w-[30px] h-[30px]' />
                {(numberOfNotifications !== 0)? 
                <div className='absolute top-0 right-0 h-4 w-4 mr-[-4px] my-0 rounded-full bg-red-400 z-2 pl-[4px] text-[14px] text-white-500 font-semibold'> {numberOfNotifications}</div> 
                : 
                null
                }
                
            </div>
            <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-black drop-shadow-lg z-1 absolute right-[40px] py-2">
                {/* TODO --> based on number of notifications show them in notification menu*/}
                <a className='flex flex-row py-2 items-center  hover:bg-gray-600' >
                    <img className="rounded-full border border-gray-100 w-[40px] h-[40px] mx-4" src={filmUrl} alt="user image" />
                    <p>New episode of True detective is out!</p>
                </a>
                <a className='flex flex-row py-2 items-center  hover:bg-gray-600' >
                    <img className="rounded-full border border-gray-100 w-[40px] h-[40px] mx-4" src={filmUrl2} alt="user image" />
                    <p>New episode of Westworld is out!</p>
                </a>
                <a className='flex flex-row py-2 items-center  hover:bg-gray-600' >
                    <img className="rounded-full border border-gray-100 w-[40px] h-[40px] mx-4" src={filmUrl3} alt="user image" />
                    <p>New episode of Peaky Blinders is out!</p>
                </a>
            </div>
        </div>
    </>
    )
}