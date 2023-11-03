import React from 'react'
import { testimonial } from '../constants'
import TestimonialsCard from '../components/TestimonialsCard'

const Testimonials = () => {
  return (
    <section id='textimonials' className='w-full flex flex-col justify-center items-center gap-10 max-container'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4'>
        {testimonial.map((testimonial) => (
          <TestimonialsCard key={testimonial.name}{...testimonial} />
        ))}        
      </div>

    </section>
  )
}

export default Testimonials