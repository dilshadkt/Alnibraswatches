import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/navbar/alnibraslogo.png'
import Searchbox from './Searchbox'
import { navIcons, navlinks } from '../constants'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ResponsiveNav from './ResponsiveNav';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [navSticky, setNavSticky] = useState(false)
  const handleNav = () => {
    setNavOpen(!navOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={` grid grid-cols-4 items-center w-full bg-[#005C53] px-5 xl:px-16 py-5 z-50 ${navSticky ? 'fixed top-0 left-0 right-0 shadow-md transition-all duration-300' : ''}`}>
      <div className='col-span-1 justify-start'>
        <div className='justify-start '>
          <img src={Logo} alt="logo" className='object-cover xl:object-contain min-h-10 min-w-20' />
        </div>
      </div>
      <div className='col-span-3'>
        <div className='flex justify-end'>
          <div className='flex gap-5 items-center justify-end w-4/5'>
            <div className='hidden xl:flex w-full xl:w-1/2'>
              <Searchbox />
            </div>
            <div className='flex gap-3'>
              {navIcons.map((item, index) => (<div key={index}>
                <img src={item.icon} alt="icon" />
              </div>))}
            </div>
            <div className='flex xl:hidden'>
              <HiOutlineMenuAlt3 color='#FFFFFF' size={25} onClick={handleNav} />
            </div>


          </div>
        </div>
        <div className='xl:flex justify-start items-end pt-8 pl-10 text-[#F0F0D6] hidden'>
          <div className='flex gap-3 '>
            {navlinks.map((item, index) => (
              <div key={index} className='relative uppercase group'>
                <h1 className=' text-lg transition-transform duration-200 ease-in-out cursor-pointer group-hover:-translate-y-3'>
                  {item}
                </h1>
                <hr className='absolute text-[#F0F0D6] left-0 w-full opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 pointer-events-none' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=''>
        <ResponsiveNav open={navOpen} handleClose = {handleNav}/>
      </div>
    </div>
      
    </>
  )
}

export default Navbar