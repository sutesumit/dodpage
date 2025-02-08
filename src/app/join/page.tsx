import React from 'react'

const Home = () => {
  return (
    <div className='page pt-12 flex justify-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]'>
        <div className='page-container my-2 relative font-body text-sm text-center'>
          <div className='title-container'>
            <p className='text-xs p-1 opacity-50 italic'>Reserved for IIHS Urban Fellows:</p>
            <p className='bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-3 rounded-sm'>UI/UX Designer JD - Dramas of Discrimination Web App</p>
          </div>
          <div className="sub-container my-3 border-[1px] border-[var(--primary-blue)] border-dotted rounded-lg">
            <p className="sub-text-container">You don&apos;t need to have every skill listed in this description.  The ARC has always been a journey driven by necessity, passion, and community support.  We often found ourselves doing several things for the first time, approaching challenges with first-principles thinking, immense curiosity, and humility. Our deep engagement with our context and needs has always empowered us to find solutions, even when lacking specific skills. If this dynamic and collaborative environment resonates with you, come get in touch!</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">About ARC and Dramas of Discrimination</h5>
            <p className="sub-text-container">The Ambedkar Reading Circle (ARC) Bangalore, founded in April 2023, is an anti-caste collective. ARC organizes reading circles, workshops, talks, and film screenings in Bengaluru with the vision of making anti-caste worldviews more accessible and mainstream in public spaces and public consciousness. Regular reading circles are often held in Cubbon Park. ARC has actively collaborated with organizations such as the Alternative Law Forum, Hasiru Dala, the Museum of Art and Photography, the Bangalore International Center, and the Foundation of Art and Health India.</p>
            <p className="sub-text-container">Dramas of Discrimination is an interactive, art-based workshop that utilizes a combined approach of systems thinking and Theatre of the Oppressed to foster more just and inclusive work environments through interactive and participatory methods. The workshop aims to cultivate and advocate for proactive engagement in addressing caste-based discrimination in Indian workplaces and places of higher education, creating a platform for rehearsing change. The design of Dramas of Discrimination was informed by the desire to simplify the understanding of systemic interventions and foster values of fraternity, inclusivity, and belonging through carefully designed workshop exercises.</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">Dramas of Discrimination Web Application</h5>
            <p className="sub-text-container">With the goal of creating an open-source web application for communities and student groups to independently access and facilitate Dramas of Discrimination workshops, the Ambedkar Reading Circle is currently converting the existing Dramas of Discrimination facilitation manual into an interactive web application. While the web application&apos;s core function is to serve as an online facilitation guide for the in-person workshop, it will also function as a repository for workshop exercise materials and a data portal. Each workshop instance can be submitted as a case study, including a charter of demands from the participating communities, which will inform a general manifesto of inclusion driven by constitutional values.</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">UI/UX Designer Role</h5>
            <p className="sub-text-container">We are seeking a UI/UX Designer to create participant-centered designs for the Dramas of Discrimination web application. You will translate the existing facilitation manual and offline workshop activities into engaging and accessible online experiences, developing workshop participant journeys, wireframes, and mockups. This role is ideal for a curious and self-directed individual who thrives in a collaborative environment and can effectively manage their own workflows. ARC&apos;s work on Dramas of Discrimination has been driven by individual contributors eager to experiment with new ideas, skills, and approaches. Visual design skills are a plus, but not required. If you are intrigued by and interested in experimenting with applying Design Justice principles and community-led practices, we need you.</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">Responsibilities:</h5>
              <ul className="list-disc pl-6">
                <li>Create initial drafts of workshop participant journeys.</li>
                <li>Design testing approaches and activities to gather feedback on journey drafts.</li>
                <li>Analyze and implement feedback, iterating on the journey drafts.</li>
                <li>Create wireframes for the application.</li>
                <li>Design mockups for the application.</li>
                <li>Collaborate with web developers to build a minimum viable application.</li>
                <li>Conduct participant testing and iterate on the design.</li>
              </ul>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">To Apply:</h5>
            <p className="sub-text-container">We strongly encourage applications from individuals from Systematically Oppressed Communities & Regions (SOCR). We believe that diverse perspectives are essential to creating inclusive and equitable designs, and we are committed to building a team that reflects the communities we serve.  Your lived experience and unique insights are valuable and will be considered an asset to our team.  We understand that traditional pathways to design roles may not always be accessible, and considere a range of experiences and skill sets.  If you are passionate about design for social justice, we encourage you to apply, even if you don&apos;t meet every listed qualification.</p>
            <p className='sub-text-container'>Please write to <span className='underline'>ambedkarreadingcircle.bangalore@gmail.com</span> with a cover letter (200-400 words) and subject line &quot;UI/UX Designer Application - ARC Dramas of Discrimination.&quot;</p>
          </div>


        </div>
    </div>
  )
}

export default Home
