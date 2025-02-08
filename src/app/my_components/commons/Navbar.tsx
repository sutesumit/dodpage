import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute top-12 left-[50vw] -translate-x-[50%] px-2 py-1 rounded-md bg-[var(--primary-blue)] font-body text-xs cursor-pointer'>
        <ul className='flex m-auto justify-center gap-1 opacity-75'>
            <li className='nav-btn'><Link href="/">Home</Link></li>
            <li className='nav-btn'><Link href="/">Resources</Link></li>
            <li className='nav-btn'><Link href="/join">Join Us</Link></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
