'use client';
import Landing from '../my_components/elements/Landing';

const Home = () => {
  return (
    <>
      <Landing colorScheme="light" />
      <button className="bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-3 rounded-md">
        Button
      </button>
    </>
  )
}

export default Home
