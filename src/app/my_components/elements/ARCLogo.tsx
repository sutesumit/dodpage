import React from 'react'
import Image from 'next/image'

const ArcLogo = () => {
  return (
    <div className='flex items-center justify-center border-[0.25px] bg-[var(--primary-white)] border-[var(--primary-blue)] p-1 rounded-md'>
      <Image src="/ARCLogo-blue.png" alt="arc-logo" width={100} height={100} />
    </div>
  )
}

export default ArcLogo
