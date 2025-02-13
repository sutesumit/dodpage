'use client';
import Landing from "./my_components/elements/Landing";
import AboutCards from "./my_components/elements/AboutCards";

export default function Home() {
  return (
      <>
        <div className="page bg-[var(--primary-blue)] w-full h-full rounded-md overflow-y-scroll">
          <Landing />
          <AboutCards />
        </div>
      </>
  );
}
