import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ActivityTileProps {
    title: string;
    href: string;
    description?: string;
    image?: string;
}

const ActivityTile = ({ title, href, description, image }: ActivityTileProps) => {
  return (
    <Link href={href} className='flex flex-col w-36 aspect-square items-center justify-center gap-2 p-2 border-[var(--primary-blue)] hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms] border-2 rounded-md'>
      <h2 className='font-title'>{title}</h2>
      <p className='font-body'>{description}</p>
      {image && <Image src={image} alt={title} width={100} height={100} />}
    </Link>
  )
}

export default ActivityTile
