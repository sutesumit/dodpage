'use client';
import Landing from "./my_components/elements/Landing";
import AboutCards from "./my_components/elements/AboutCards";
import LandingVideo from "./my_components/elements/LandingVideo";
import Footer from "./my_components/elements/Footer";

export default function Home() {
  return (
      <>
        <div className="page bg-[var(--primary-blue)] border-[var(--primary-blue)] border-[0.25px] w-full h-full rounded-md overflow-y-scroll">
          <Landing />
          <LandingVideo />
          <AboutCards />
          <Footer />
        </div>
      </>
  );
}
