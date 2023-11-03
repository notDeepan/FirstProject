import React from 'react'
import { Video } from '../assets/images';

const Hero = () => {
  return (
    <section id='hero' className='w-full flex flex-col justify-center items-center gap-10 max-container min-h-screen mt-52'>
      <div className='relative flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-bold text-montserrat text-white'>Landing template for startups </h1>
        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#9ba9b4] text-[30px] text-center tracking-[-0.25px] leading-[30px] mt-20">
          Our landing page template works on all devices, so you only have to <br />
          set it up once, and get beautiful results forever.
        </p>
        <div className='flex flex-row gap-10 mt-20 items-center'>
          <button className='border border-white px-10 py-5 bg-blue-400 rounded-lg'>
            <p className='font-bold text-montserrat text-white'>Start free trial</p>
          </button>
          <button className='border border-white px-10 py-5 rounded-lg'>
            <p className='font-bold text-montserrat text-white'>Start free trial</p>
          </button>
        </div>

        <div className=' flex mt-20'>
          <img src={Video} alt="Video" width={1300} height={900} />
        </div>
      </div>
    </section>
  )
}

export default Hero