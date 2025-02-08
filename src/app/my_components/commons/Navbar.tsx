import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute top-12 left-[50vw] -translate-x-[50%] px-2 py-1 rounded-md bg-[var(--primary-blue)] font-body text-xs cursor-pointer'>
        <ul className='flex m-auto justify-center gap-1 opacity-75'>
            <Link href="/"><li className='nav-btn'>Home</li></Link>
            <Link href="/resources"><li className='nav-btn'>Resources</li></Link>
            <Link href="/join"><li className='nav-btn'>Join Us</li></Link>
        </ul>
      
    </nav>
  )
}

export default Navbar
