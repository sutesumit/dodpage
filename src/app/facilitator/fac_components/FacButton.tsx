'use client'
import React from 'react'
import Link from 'next/link'


const FacButton = ({text, href}: {text: string, href: string}) => {
    return (
        <Link 
            className='text-[0.9em] h-10 w-36 flex items-center justify-center rounded-md hover:bg-[var(--primary-white)] hover:text-[var(--primary-blue)] transition-colors duration-[500ms]'
            href={href}
        >
            {text}
        </Link>
    )
}

export default FacButton
