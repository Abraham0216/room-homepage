import React from 'react';
import { useSwiper }from 'swiper/react';


const NavButtons = () => {


    const swiper = useSwiper();

    return (
        <div className='flex absolute bottom-0 right-0 xl:transform xl:translate-x-full '>
            <button onClick={() => swiper.slidePrev()} className='bg-black hover:bg-[#454545]   py-4 px-5 xl:py-8 xl:px-10'> <img src='/images/icon-angle-left.svg' /></button>
            <button onClick={() => swiper.slideNext()} className='bg-black hover:bg-[#454545]   py-4 px-5 xl:py-8 xl:px-10'> <img src='/images/icon-angle-right.svg' /></button>
        </div>
    );
}

export default NavButtons;
