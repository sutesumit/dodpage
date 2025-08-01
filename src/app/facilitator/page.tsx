'use client';
import FacilitatorLanding from './FacilitatorLanding';
import Link from 'next/link';
const Home = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-5rem)] w-full flex-col bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] rounded-md'>
      <FacilitatorLanding />
      <div className='flex h-auto justify-center items-center p-5'>
        <Link 
          href="/facilitator/overview" 
          className="py-1 px-6 rounded-md border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms]"
        >
          Begin
        </Link>
      </div>
    </div>
  )
}

export default Home
