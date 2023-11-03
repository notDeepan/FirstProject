import React from 'react'

const Subscribe = () => {
  return (
    <section id='section' className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <div className=' bg-[#5D5DFF] flex lg:flex-row sm:flex-col rounded-lg gap-96 px-20 py-20 sm:gap-10'>
        <div className='flex flex-col w-[120%] sm:px-16'>
          <h1 className='text-white font-bold text-5xl'>Stay in the loop</h1>
          <p className='text-white mt-5'>Join our newsletter to get top news before anyone else.</p>
        </div>
        <div className='lg:max-w-[40%] w-full flex items-center gap-5 px-16'>
          <input type='text' placeholder='Your email...' className='input' />
          <button className='border border-white rounded-lg px-5 py-5 bg-white'>
            <p className='text-blue-500 font-bold'>Subscribe</p>
          </button>
        </div>  
      </div>
    </section>
  )
}

export default Subscribe