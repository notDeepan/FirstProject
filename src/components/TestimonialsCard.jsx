import React from 'react'

const TestimonialsCard = ( { imgURL, text, name, designation }) => {
  return (
    <div className='flex flex-col bg-clip-border p-3 px-10 bg-gray-800'>
        <img src={imgURL} alt='photo' className='w-[50px] h-[50px] mt-5' />
        <p className='text-white text-montserrat mt-5'>{text}</p>
        <hr className="lg:w-96 h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10 sm:w-40 mt-10"></hr>
        <div className='flex justify-between'>
            <p className='text-white font-semibold mt-5 mb-5'>
                <span>{name}</span>
                <span className='text-gray-600'>    /    </span>
                <span className=' text-blue-300'>{designation}</span>
            </p>
        </div>
        
    </div>
  )
}

export default TestimonialsCard