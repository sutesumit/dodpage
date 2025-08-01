'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { BiCollapseVertical } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const pathname = usePathname()
  const isFacilitator = pathname.includes('/facilitator')

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>

      {/* Full Screen Navigation Menu */}

      {
      !isFacilitator && 
      <nav className='full-nav w-full text-current hidden sm:block text-xs rounded-md z-50'>
        <AnimatePresence mode='popLayout'>
              <motion.ul
                key='nav'
                className='flex gap-1 p-1 items-baseline justify-around w-full rounded-md bg-[var(--primary-blue)] border-[1px] border-blue-900'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={toggleMenu}
              >
                <Link href="/"><li className='nav-btn'><p className="text-[1em] text-left">Dramas<span className="font-of text-[2.5em] leading-[1em] p-[2px]">of </span>Discrimination</p></li></Link>
                <div  className='flex gap-1 p-1 items-baseline justify-between'>
                  <Link href="/gallery"><li className='nav-btn'>Gallery</li></Link>
                  <Link href="/facilitator"><li className='nav-btn'>Facilitator</li></Link>
                  <Link href="/resources"><li className='nav-btn'>Resources</li></Link>
                  <Link href="/joinus"><li className='nav-btn'>Join Us</li></Link>
                </div>
              </motion.ul>
          </AnimatePresence>
      </nav>
      }

      {/* Mobile Navigation Menu */}
      <motion.nav 
        className='mobile-nav block sm:hidden w-auto max-w-[30ch] justify-between items-center z-50 mt-1 p-1 rounded-md bg-[var(--primary-blue)] border-[1px] border-blue-900 text-xs overflow-hidden'
        drag
        dragMomentum={false}
        dragElastic={10}
        style={{ cursor: 'move' }}
      >
          {
          <motion.ul
          key='toggle-nav'
          className='m-auto flex text-center items-center justify-between'
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.2 }}
          >
            <div className='object-contain flex items-center gap-2 w-full justify-between px-2 text-[0.5rem]'>
              <p className="text-[1.25em] leading-[1em] text-left nav-btn">Dramas<span className="font-of text-[2.5em] leading-[1em] p-[2px]">of </span>Discrimination</p>
              <div 
                className='text-base p-2 cursor-pointer nav-btn'
                onClick={toggleMenu}
              >
                { !openMenu ? <FiMenu /> : <BiCollapseVertical /> }
              </div>
            </div>
          </motion.ul>
          }
          <AnimatePresence mode='popLayout'>
            { openMenu &&
              <motion.ul
                key='nav'
                className='m-auto justify-center items-center'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={toggleMenu}

              >
                <Link href="/"><li className='nav-btn'>Home</li></Link>
                <Link href="/gallery"><li className='nav-btn'>Gallery</li></Link>
                <Link href="/facilitator"><li className='nav-btn'>Facilitator</li></Link>
                <Link href="/resources"><li className='nav-btn'>Resources</li></Link>
                <Link href="/joinus"><li className='nav-btn'>Join Us</li></Link>
              </motion.ul>
            }
          </AnimatePresence>
      </motion.nav>
      {
        openMenu &&
        <div
          className='absolute inset-0 z-10 cursor-not-allowed'
          onMouseEnter={toggleMenu}
          onTouchStart={toggleMenu}
        >
          <div className='absolute inset-0 opacity-0'></div>
        </div>
      }
    </>
  )
}

export default Navbar
