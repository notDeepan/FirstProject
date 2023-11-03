import React from 'react'

const SolutionsCard = ({ imgURL, heading1, heading2, description, tick, text1, text2, text3 }) => {
  return (
    <div className='flex lg:flex-row sm:flex-col justify-between gap-10'>
        <div className='flex flex-col items-start mt-56'>
            <p className='font-medium text-blue-800'>{heading1}</p>
            <h1 className='font-bold text-3xl text-white mt-5'>{heading2}</h1>
            <p className='text-white mt-5 w-[80%] text-montserrat'>{description}</p>
            <div className='flex gap-10 mt-10'>
                <img src={tick} about="tick" className='w-[20px] h-[30px]' />
                <p className='text-white text-montserrat'>{text1}</p>
            </div>
            <div className='flex gap-10 mt-10'>
                <img src={tick} about="tick" className='w-[20px] h-[30px]' />
                <p className='text-white text-montserrat'>{text2}</p>
            </div>
            <div className='flex gap-10 mt-10'>
                <img src={tick} about="tick" className='w-[20px] h-[30px]' />
                <p className='text-white text-montserrat'>{text3}</p>
            </div>            
        </div>  
        <div className=' flex items-end'>
            <img src={imgURL} alt="imgURL" className='w-[800px] h-[800px]'/> 
        </div>
    </div>
      
  )
}

export default SolutionsCard