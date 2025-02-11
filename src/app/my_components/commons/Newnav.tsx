'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { RiCloseFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion'
import ArcLogo from "../elements/ARCLogo";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <motion.nav 
        className='absolute top-10 z-20 left-[50vw] -translate-x-[50%] w-[calc(100%-5rem)] max-w-[30ch] mt-1 p-1 rounded-md bg-[var(--primary-blue)] border-[1px] border-blue-900 text-xs cursor-pointer'
      >
          {
          <motion.ul
          key='toggle-nav'
          className='m-auto flex text-center items-center justify-between'
          onMouseEnter={() => setOpenMenu(true)}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          >
            <div className='object-contain flex items-center gap-2 w-full justify-between px-2 text-[0.5rem] nav-btn'>
              <p className="text-[1.25em] leading-[1em] text-left">Dramas<span className="font-of text-[2.5em] leading-[1em] p-[2px]">of </span>Discrimination</p>
              <div 
                className='text-base p-1'
                onClick={toggleMenu}
              >
                { !openMenu ? <FiMenu /> : <RiCloseFill /> }
              </div>
            </div>
          </motion.ul>
          }
          <AnimatePresence mode='popLayout'>
            { openMenu &&
              <motion.ul
                key='nav checkbox'
                className='m-auto justify-center items-center'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
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
