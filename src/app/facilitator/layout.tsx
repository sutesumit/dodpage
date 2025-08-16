'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import ArcLogo from '../my_components/elements/ARCLogo'
import Link from 'next/link'
import Clock from '../my_components/commons/clock/Clock'
import FacButton from './fac_components/FacButton'

const Layout = ({children}: {children: React.ReactNode}) => {

    const pathname = usePathname()
    // const isOverview = pathname.includes('/overview')
    const isFacilitatorLanding = pathname !== '/facilitator'

  return (
    <div className='flex flex-col w-full h-full'>
        {
            isFacilitatorLanding &&
            <div 
                className={`flex relative flex-shrink-0 justify-between px-10 items-center h-14 text-[var(--primary-white)] bg-[var(--primary-blue)] rounded-md`}
            >
                <div className='w-12'>
                    <FacButton href="/facilitator/overview" />
                </div>
                <div className='w-36 relative'>
                    <Clock />
                </div>
            </div>
        }
        <div className='flex flex-1 justify-center items-center h-auto'>
            {children}
        </div>
        {
                isFacilitatorLanding &&
            <div 
                className={`flex flex-shrink-0 justify-between px-10 items-center h-14 text-[var(--primary-white)] bg-[var(--primary-blue)] rounded-md`}
            >
                <Link href="/"><p className="text-[0.75em] text-left">Dramas<span className="font-of text-[2em] leading-[1em] p-[2px]">of </span>Discrimination</p></Link>
                <div className='w-20 h-auto'>
                    <ArcLogo />
                </div>
            </div>
            }
    </div>
  )
}

export default Layout
