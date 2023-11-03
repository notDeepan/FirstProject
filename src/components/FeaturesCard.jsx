import React from 'react'

const FeaturesCard = ({ imgURL, name, description }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full mt-14'>
        <div className=' flex justify-center items-center'>
            <img src={imgURL} alt={name} className='w-[80px] h-[80px]'/> 
        </div>               
        <h2 className='mt-2 text-2xl leading-normal font-bold font-palanquin text-white text-center'>{name}</h2>
        <p className='mt-2 font-semibold font-montserrat text-slate-400 text-2lx leading-normal text-center lg:w-96 sm:w-56 md:w-60'>{description}</p>        
    </div>
  )
}

export default FeaturesCard