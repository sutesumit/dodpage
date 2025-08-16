'use client'
import React, { useState } from 'react'

const Panel = () => {

    const [tabs, setTabs] = useState([
        {
            title: "Reality",
            content: "The workshop was a safe space to rehearse resistance. The real world is unpredictable, risky, and sometimes costly. Question: What further preparations do we need before facing real-world discrimination?",
            selected: true
        },
        {
            title: "Actors",
            content: "Earlier, we saw how different actors struggled to uphold their responsibilities or live up to constitutional values. Question: What prevented them from acting? Question: How can each actor be supported or motivated to overcome these challenges?",
            selected: false
        },
        {
            title: "Selectivity",
            content: "Articles 15 and 16 prohibit discrimination on religion, race, caste, sex, and place of birth. Yet, Diversity, Equity, and Inclusion efforts often highlight some grounds while neglecting others. Question: What are examples of selective interpretation in our DEI efforts?",
            selected: false
        },
        {
            title: "Definition",
            content: "We’ve been unpacking discrimination for hours. To act effectively, we need clarity. Question: How can we practically define discrimination so that we can identify it and address it without hesitation?",
            selected: false
        },
        {
            title: "+",
            content: "Question: What questions are still on your mind? Question: What would you like the group to reflect on further?",
            selected: false
        }
    ])
  return (
    <div className='p-0 text-[var(--primary-blue)] max-w-[50%] h-1/2 flex flex-col items-center justify-center'>
      <div className='tabs w-full flex flex-row'>
        {tabs.map((tab, index) => (
            <div 
                key={index} 
                className={`tab text-sm py-2 bg-[var(--primary-white)] rounded-t-md flex items-center justify-center border-[0.25px] border-[var(--primary-blue)] cursor-pointer flex-1 hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms] ${tab.selected ? 'selected bg-blue-950 text-[var(--primary-white)]' : ''}`} 
                onClick={() => {setTabs(tabs.map((tab, i) => i === index ? {...tab, selected: true} : {...tab, selected: false}))}}
            >
                {tab.title}
            </div>
        ))}
      </div>
      <div className='description text-sm w-full p-5 bg-[var(--primary-white)] border-t-0 rounded-b-md flex-1 border-[0.25px] border-[var(--primary-blue)] h-full flex items-center justify-center'>
        {tabs.find(tab => tab.selected)?.content}
      </div>
    </div>
  )
}

export default Panel
