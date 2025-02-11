'use client';
import React from 'react';
import Image from 'next/image';


const Loading = () => {
  return (
    <div
      className="page flex flex-col justify-center items-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]"
    >
      <div className='animate-spin'>
        <Image src="/ashoka-chakra.svg" alt="ashoka-chakra" width={40} height={40} />
      </div>
      <p className="mt-4 text-center font-body text-xs text-[var(--primary-blue)] opacity-75">
        Loading video...
      </p>
    </div>
  );
};

export default Loading;
