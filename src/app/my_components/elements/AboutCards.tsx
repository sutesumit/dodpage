import React from 'react'

const AboutCards = () => {
  return (
    <div className="about-section w-full flex justify-center bg-[var(--primary-blue)] checkbox">
        <div className="about-cards mx-auto my-4 grid grid-cols-2 max-w-[100ch] text-xs gap-4">
            <div className="about arc-about">
            <h5>Ambedkar Reading Circle</h5>
            <p>The Ambedkar Reading Circle (ARC) Bangalore, founded in April 2023, is an anti-caste collective. ARC organizes reading circles, workshops, talks, and film screenings in Bengaluru with the vision of making anti-caste worldviews more accessible and mainstream in public spaces and public consciousness. Regular reading circles are often held in Cubbon Park. ARC has actively collaborated with organizations such as the Alternative Law Forum, Hasiru Dala, the Museum of Art and Photography, the Bangalore International Center, and the Foundation of Art and Health India.</p>
            </div>
            <div className="about dod-about">
            <h5>Dramas of Discrimination Workshop</h5>
            <p>Dramas of Discrimination is an interactive, art-based workshop that utilizes a combined approach of systems thinking and Theatre of the Oppressed to foster more just and inclusive work environments through interactive and participatory methods. The workshop aims to cultivate and advocate for proactive engagement in addressing caste-based discrimination in Indian workplaces and places of higher education, creating a platform for rehearsing change. The design of Dramas of Discrimination was informed by the desire to simplify the understanding of systemic interventions and foster values of fraternity, inclusivity, and belonging through carefully designed workshop exercises.</p>
            </div>
            <div className="about grid-flow-col col-span-2 dodapp-about">
            <h5>Dramas of Discrimination Web App</h5>
            <p>With the goal of creating an open-source web application for communities and student groups to independently access and facilitate Dramas of Discrimination workshops, the Ambedkar Reading Circle is currently converting the existing Dramas of Discrimination facilitation manual into an interactive web application. While the web application's core function is to serve as an online facilitation guide for the in-person workshop, it will also function as a repository for workshop exercise materials and a data portal. Each workshop instance can be submitted as a case study, including a charter of demands from the participating communities, which will inform a general manifesto of inclusion driven by constitutional values.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCards
