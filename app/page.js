import Image from 'next/image'
import Navigation from './components/Navigation'
import SliderInfo from './components/SliderInfo'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center  ">



      <div className='w-full relative '>
    <Navigation />
      <img className=' absolute xl:fixed z-10 top-[39px] xl:left-16 left-1/2 -translate-x-1/2' src='/images/logo.svg' />
        
        <SliderInfo />
        
        
        

  
</div>
<div className='xl:flex flex-row xl:w-full'>
  <Image 
      src='/images/image-about-dark.jpg'
      alt='room-dark'
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%' }}  />
    
<div className='p-8  xl:p-14    '>
  <div className='' >
  <h3 className='text-sm xl:text-lg font-bold my-4 tracking-[0.4em]'>ABOUT OUR FURNITURE</h3>

  <p className='text-[#a1a1a1]    leading-5'>
  Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.
  </p>
  </div>
</div>
  <Image 
      src='/images/image-about-light.jpg'
      alt='room-light'
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%' }}  />
    

    
    
    </div>
    </div>
  )
}
