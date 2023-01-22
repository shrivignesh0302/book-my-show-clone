import React from 'react';
import { BiCaretDown, BiChevronRight, BiMenu, BiSearchAlt } from 'react-icons/bi';

const NavLg = () => {
  return (
    <div>
      <nav className='hidden md:flex items-center justify-between bg-gray-700 h-16'>
        <div className='flex p-2 gap-5 items-center px-24 w-3/4'>
          <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="bookmyshow" />
          <div className='flex bg-white gap-3 items-center rounded-md w-8/12 h-9'>
            <BiSearchAlt className='text-gray-600 mx-2' />
            <input type="text" className=' w-11/12 p-1 outline-none ' placeholder='Search for movies,plays,sports and activites' />
          </div>
        </div>
        <div className='flex p-2 gap-4 items-center justify-center w-1/4 text-sm'>
          <span className='flex items-center text-gray-300 gap-1'>Perambalur <BiCaretDown /></span>
          <div className=''><button className='py-1 px-3 bg-red-400 rounded-md text-white whitespace-nowrap w-46'>Sign in</button></div>
          <span className='flex items-center text-gray-300 font-bold'><BiMenu className='w-8 h-8' /></span>
        </div>
      </nav>
      <nav className='hidden lg:flex items-center justify-between bg-gray-800 mb-2 h-10 px-20'>
        <div className='flex gap-5 text-gray-100 text-sm '>
          <span>Movies</span>
          <span className='relative'>Stream <sup className='text-red-400 absolute left-9'>new</sup></span>
          <span className='hover:cursor-pointer'>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activites</span>
          <span>Buzz</span>
        </div>
        <div className='flex gap-5 text-gray-100 text-sm '>
          <span className='relative'>ListYourShow<sup className='text-red-400 absolute left-16.5'>new</sup></span>
          <span>Corporates</span>
          <span>Offers </span>
          <span>Gift card</span>
        </div>
      </nav>
    </div>
  )
}
const NavSm = () => {
  return (
    <nav className=' sm:flex md:hidden flex items-center justify-between bg-gray-700 h-18 w-screen mb-2'>
      <div className=' p-3 text-white inline-block'>
        <h1 className='text-xl font-bold flex flex-wrap'>It's All Starts Here!</h1>
        <span className='flex items-center text-gray-300 gap-1 text-sm'>Perambalur <BiChevronRight /></span>
      </div>
      <div className='flex p-2 gap-4 items-center text-sm'>
        <div className=''><button className='py-1 px-3 bg-red-400 rounded-md text-white whitespace-nowrap w-46'>Use app</button></div>
        <span className='flex items-center text-gray-100'><BiSearchAlt className='w-6 h-6' /></span>
      </div>
    </nav>
  )
}

const NavBar = () => {
  return (
    <>
      <NavLg />
      <NavSm />
    </>
  )
}

export default NavBar
