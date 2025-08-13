'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { CgScrollH } from "react-icons/cg";
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {

  const [openMobMenu, setOpenMobMenu] = useState(false)

  const handleOpenMobMenu = () => {
    setOpenMobMenu(!openMobMenu)
    setTimeout(() => {
      setOpenMobMenu(!openMobMenu)
    }, 200)
  }

  return (
    <>
      <nav className='flex w-full overflow-hidden top-12 z-20 left-[50vw] -translate-x-[50%] px-1 py-1 gap-2 rounded-md bg-[var(--primary-blue)] border-[0.2px] border-blue-900 font-body text-xs shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] cursor-pointer'>
          <AnimatePresence mode='popLayout'>
          {
            openMobMenu &&
            <motion.ul
            key='toggle-nav'
            className='m-auto text-lg text-center opacity-75 nav-btn transition-a'
            onClick={handleOpenMobMenu}
            initial={{ y: -100, width: '600px' }}
            animate={{ y: 0, width: '100%' }}
            exit={{ y: 100, width: '600px' }}
            transition={{ duration: 0.1 }}
          >
            <CgScrollH />
          </motion.ul>
          }
          </AnimatePresence>
          <AnimatePresence mode='popLayout'>
            { !openMobMenu &&
              <motion.ul
                key='nav'
                className='flex flex-wrap m-auto justify-center items-center gap-1 opacity-75'
                initial={{ opacity: 0, y: -100, width: '600px' }}
                animate={{ opacity: 1, y: 0, width: '100%' }}
                exit={{ opacity: 0, y: 100, width: '600px' }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              >
                <Link href="/"><li className='nav-btn'>Home</li></Link>
                <Link href="/gallery"><li className='nav-btn'>Gallery</li></Link>
                <Link href="/facilitator"><li className='nav-btn'>Facilitator</li></Link>
                <Link href="/resources"><li className='nav-btn'>Resources</li></Link>
                <Link href="/joinus"><li className='nav-btn'>Join Us</li></Link>
              </motion.ul>
            }
          </AnimatePresence>
      </nav>
      {
        !openMobMenu &&
        <div
          className='absolute inset-0 z-10 cursor-crosshair'
          onClick={handleOpenMobMenu}
        >
          <div className='absolute inset-0 opacity-10'></div>
        </div>
      }
    </>
  )
}

export default Navbar
