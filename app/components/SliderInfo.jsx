'use client'
import React from 'react';
import {Swiper, SwiperSlide }from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation }from 'swiper/modules';
import Image from 'next/image';
import NavButtons from './NavButtons';


const SliderInfo = () => {


    const slides = [
        {
          image: ['/images/mobile-image-hero-1.jpg', '/images/desktop-image-hero-1.jpg'],
          alt: 'room',
          title: 'Discover innovative ways to decorate',
          description:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        },
        {
          image: ['/images/mobile-image-hero-2.jpg', '/images/desktop-image-hero-2.jpg'],
          alt: 'room',
          title: 'We are available all across the globe',
          description:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        },
        {
          image: ['/images/mobile-image-hero-3.jpg', '/images/desktop-image-hero-3.jpg'],
          alt: 'room',
          title: 'Manufactured with the best materials',
          description:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        },
      ];

    return (
        <div className='w-full relative'>
        
        <Swiper modules={[Navigation]} slidesPerView={1} loop={true}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
        <div className='xl:flex flex-row xl:w-full'>
          <div className='relative w-full'>
            <Image
              src={slide.image[0]}
              srcset={`${slide.image[1]} 1280w`}
              alt={slide.alt}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full'
            />
            <NavButtons />
          </div>
          <div className='p-8 xl:w-[67.2%] xl:flex justify-center items-center'>
            <div className='xl:w-[77%]'>
            <h2 className='text-4xl  font-bold my-4'>{slide.title}</h2>
            <p className='text-[#a1a1a1] leading-5'>{slide.description}</p>
            <button className='text-xl group hover:text-[#A1A1A1] font-semibold py-4 my-4 tracking-[0.5em] flex items-center gap-x-5'>
              SHOP NOW
              <svg width="40" className='group-hover:fill-[#a1a1a1] group-hover:text-[#a1a1a1]' height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill-rule="evenodd" clip-rule="evenodd" /></svg>

              
            </button>
            </div>
          </div>
          
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
        </div>
        
    );
}

export default SliderInfo;

