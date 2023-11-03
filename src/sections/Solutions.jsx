import React from 'react'
import { solutions } from '../constants'
import SolutionsCard from '../components/SolutionsCard'

const Solutions = () => {
  return (
    <section id='solution' className='w-full flex flex-col justify-center items-center max-container gap-10'>
      <div className='bg-clip-border p-3 px-10 bg-green-200 rounded-full'>
        <p className='text-green-900'>Reach goals that matter</p>
      </div>
      <h1 className='text-6xl font-bold text-montserrat text-white mt-10 sm:text-center'>One product, unlimited solutions</h1>
      <p className='text-montserrat text-[#9BA9B4] w-[40%] text-center sm:w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className='flex flex-col gap-12'>
        {solutions.map((solutions) => (
          <SolutionsCard key={solutions.imgURL} {...solutions} />
        ))}
      </div>
    </section>
  )
}

export default Solutions