import React from 'react'
import { Logo } from '../assets/images';

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 w-full absolute'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={Logo} alt='Logo' width={50} height={50} />
        </a>
        <ul className='flex-1 flex justify-end items-center gap-10 max-lg:hidden px-30 py-11'>
          <li><p className='font-montserrat font-semibold text-blue-500'>Sign in</p></li>
          <li><button className='rounded-full border border-cyan-50 px-8 py-2 bg-[#5D5DFF]'><p className='font-montserrat font-semibold text-white'>Sign up</p></button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav