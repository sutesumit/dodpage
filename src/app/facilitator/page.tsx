'use client';
import FacilitatorLanding from './FacilitatorLanding';
import Link from 'next/link';
const Home = () => {
  return (
    <>
      <FacilitatorLanding />
      <div className='absolute bottom-[10vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
        <Link 
          href="/facilitator/overview" 
          className="bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-6 rounded-md"
        >
          Begin
        </Link>
      </div>
    </>
  )
}

export default Home
