'use client';
import Landing from "./my_components/elements/Landing";
import AboutCards from "./my_components/elements/AboutCards";
import Gallery from "./gallery/page";
import LandingVideo from "./my_components/elements/LandingVideo";

export default function Home() {
  return (
      <>
        <div className="page bg-[var(--primary-blue)] border-[var(--primary-blue)] border-[0.25px] w-full h-full rounded-md overflow-y-scroll">
          <Landing />
          <LandingVideo />
          <AboutCards />
        </div>
      </>
  );
}
