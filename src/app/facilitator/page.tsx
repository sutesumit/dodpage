'use client';
import FacilitatorLanding from './FacilitatorLanding';

const Home = () => {
  return (
    <>
      <FacilitatorLanding />
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
        <button className="bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-3 rounded-md">
          Button
        </button>
      </div>
    </>
  )
}

export default Home
