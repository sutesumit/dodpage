'use client'
import React from 'react'
import Link from 'next/link'


const FacButton = ({text, href}: {text: string, href: string}) => {
    return (
        <Link 
            className=''
            href={href}
        >
            {text}
        </Link>
    )
}

export default FacButton
