'use client'
import React from 'react'
import Link from 'next/link'
import { Undo2 } from 'lucide-react'
import { usePathname } from 'next/navigation'

const FacButton = ({ href}: {href: string}) => {
    const pathname = usePathname()

    return (
        <Link 
            className='text-[0.9em] h-10 w-36 px-5 flex gap-2 flex-row items-center justify-left rounded-md hover:bg-[var(--primary-white)] hover:text-[var(--primary-blue)] transition-colors duration-[500ms]'
            href={href}
        >
            <Undo2 strokeWidth={2} size={17} />
            {pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1)}
        </Link>
    )
}

export default FacButton
