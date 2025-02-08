'use client';
import DodLogo from "./my_components/elements/DodLogo";
import ARCLogo from "./my_components/elements/ARCLogo";

export default function Home() {
  return (
      <div className="page flex items-center justify-center bg-[var(--primary-blue)] w-full h-full rounded-md">
        <div className="flex flex-col md:gap-5 gap-10 items-center justify-center font-title">
          <ARCLogo />
          <p className="font-body text-xs">presents</p>
          <DodLogo />
        </div>
        <p className="font-body absolute bottom-10 text-xs p-10 max-w-[80ch] text-center opacity-70">A workshop for dialogue, reflection, and action towards a more just and inclusive society.</p>
      </div>
  );
}
