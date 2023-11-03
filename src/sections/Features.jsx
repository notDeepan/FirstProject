import React from 'react'
import { features } from '../constants'
import FeaturesCard from '../components/FeaturesCard'

const Features = () => {
  return (
    <section id='feature' className='w-full flex flex-col justify-center items-center gap-10 max-container min-h-screen mt-0'>
      <div className='relative flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-montserrat text-white text-center'>The majority of our customers do not <br />
        understand their workflows </h1>
        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#9ba9b4] text-[20px] text-center tracking-[-0.25px] leading-[40px] mt-20">
          Our landing page template works on all devices, so you only have to <br />
          set it up once, and get beautiful results forever.
        </p>
      </div>

      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 sm:gap-10 lg:gap-14 md:gap-12'>
        {features.map((features) => (
          <FeaturesCard key={features.name} {...features} />
        ))}
      </div>
    </section>
  )
}

export default Features