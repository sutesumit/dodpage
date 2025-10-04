import React from 'react'
import { article } from './article'

const page = () => {
  return (
    <div className='page pt-12 flex justify-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]'>
        <div className='page-container z-0 my-2 relative font-body text-sm text-center scroll-smooth overflow-x-hidden'>
          <div className='title-container '>
            <div className='flex flex-col p-2 items-center justify-center border-[1px] border-[var(--primary-blue)] rounded-md'>
                <p className='text-xl mt-12 p-2 text-center border-[1px] font-bold'>
                    {article.title}
                </p>
                <p className='border-[1px] text-xs text-center italic'>
                    {article.blurb}
                </p>
            </div>   
            </div>

          {article.description && (
            <div className='sub-container my-3 border-[1px] border-[var(--primary-blue)] border-dotted rounded-md'>
              <p className='sub-text-container'>{article.description}</p>
            </div>
          )}
          <div className='sub-container flex flex-col gap-2 text-left'>
            {article.paragraphs.map((para, idx) => (
              <p key={idx} className='sub-text-container text-justify'>{para}</p>
            ))}
          </div>
        </div>
    </div>
  )
}

export default page
