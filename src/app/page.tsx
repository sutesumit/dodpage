'use client';
import DodLogo from "./my_components/elements/DodLogo";
import ARCLogo from "./my_components/elements/ARCLogo";
import Landing from "./my_components/elements/landing";

export default function Home() {
  return (
      <>
        <div className="page bg-[var(--primary-blue)] w-full h-full rounded-md overflow-y-scroll checkbox">
          <Landing />
          <div className="relative container m-auto flex flex-col gap-4 justify-center items-center">
            <div className="about-cards m-2 flex flex-col max-w-[70ch] text-xs gap-4">
              <div className="about arc-about">
                <h5>Ambedkar Reading Circle</h5>
                <p>The Ambedkar Reading Circle (ARC) Bangalore, founded in April 2023, is an anti-caste collective. ARC organizes reading circles, workshops, talks, and film screenings in Bengaluru with the vision of making anti-caste worldviews more accessible and mainstream in public spaces and public consciousness. Regular reading circles are often held in Cubbon Park. ARC has actively collaborated with organizations such as the Alternative Law Forum, Hasiru Dala, the Museum of Art and Photography, the Bangalore International Center, and the Foundation of Art and Health India.</p>
              </div>
              <div className="about dod-about">
                <h5>Dramas of Discrimination Workshop</h5>
                <p>Dramas of Discrimination is an interactive, art-based workshop that utilizes a combined approach of systems thinking and Theatre of the Oppressed to foster more just and inclusive work environments through interactive and participatory methods. The workshop aims to cultivate and advocate for proactive engagement in addressing caste-based discrimination in Indian workplaces and places of higher education, creating a platform for rehearsing change. The design of Dramas of Discrimination was informed by the desire to simplify the understanding of systemic interventions and foster values of fraternity, inclusivity, and belonging through carefully designed workshop exercises.</p>
              </div>
              <div className="about dodapp-about">
                <h5>Dramas of Discrimination Web App</h5>
                <p>With the goal of creating an open-source web application for communities and student groups to independently access and facilitate Dramas of Discrimination workshops, the Ambedkar Reading Circle is currently converting the existing Dramas of Discrimination facilitation manual into an interactive web application. While the web application's core function is to serve as an online facilitation guide for the in-person workshop, it will also function as a repository for workshop exercise materials and a data portal. Each workshop instance can be submitted as a case study, including a charter of demands from the participating communities, which will inform a general manifesto of inclusion driven by constitutional values.</p>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
