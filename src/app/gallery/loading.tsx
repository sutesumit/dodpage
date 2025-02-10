'use client';
import React from 'react';
import Image from 'next/image';


const Loading = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-white backdrop-blur-sm z-50"
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
