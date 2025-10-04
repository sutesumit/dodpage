'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const cards = [
  {
    id: 1,
    title: 'Facilitation Manual',
    description: 'With the Dramas of Discrimination Facilitation Manual, you can recreate inclusion workshops within your circles, adapting the exercises, scripts, and reflections to your community’s unique context.',
    href: '/resources/facilitation-manual',
    cover: '/manual/ARC_DoD_Manual_Page-0.jpg',
    primaryCard: true

  },
  {
    id: 2,
    title: 'Beyond Good Intentions',
    description: 'A savarna reflection on the limits of good intentions and the necessity of grace and courage in accountability.',
    href: '/resources/beyond-good-intentions',
    cover: '/manual/ARC_DoD_Manual_Page-2.jpg',
    primaryCard: false
  },{
    id: 3,
    title: 'After Collective Care Fails',
    description: 'A Dalit participant reflects on humiliation, neglect, and the silence of a room that failed them.',
    href: '/resources/after-collective-care-fails',
    cover: '/manual/ARC_DoD_Manual_Page-1.jpg',
    primaryCard: false
  },
  // {
  //   id: 4,
  //   title: 'Beyond Good Intentions',
  //   description: 'Beyond Good Intentions',
  //   href: '/resources/beyond-good-intentions',
  //   cover: '/manual/ARC_DoD_Manual_Page-2.jpg',
  //   primaryCard: false
  // },{
  //   id: 5,
  //   title: 'After Collective Care Fails',
  //   description: 'After Collective Care Fails',
  //   href: '/resources/after-collective-care-fails',
  //   cover: '/manual/ARC_DoD_Manual_Page-1.jpg',
  //   primaryCard: false
  // },
]

const Home = () => {
  return (
    <div className="page flex flex-col items-center justify-center bg-[var(--primary-blue)] w-full h-full rounded-md">
      <div className='flex flex-col w-full h-full pt-12 items-center justify-center text-[var(--primary-white)] rounded-md'>
        <div className='page-container pt-4 grid grid-cols-2 gap-5 overflow-scroll'>
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`hover:bg-blue-800 ${card.primaryCard ? 'col-span-2' : 'col-span-1'}`}
            >
              <Link 
                href={card.href} 
                className={`relative flex flex-col items-start justify-center w-full h-[30vh] rounded-md overflow-hidden
                  ${card.primaryCard 
                      ? '' 
                      : ''
                    }
                  `}
              >
                <Image 
                  src={card.cover} 
                  alt={card.title} 
                  fill
                  className='object-cover'
                />
                <div className='bg-[var(--primary-blue)] text-[var(--primary-white)] z-10 m-2 p-3 rounded-md'>
                  <h2 className='text-lg'>{card.title}</h2>
                  <p className='text-sm opacity-50'>{card.description}</p>
                </div>
                <div
                  className='bg-gradient-to-tl from-blue-800 to-transparent w-full h-full absolute'
                >
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
