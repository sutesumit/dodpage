import DodLogo from "./my_components/elements/DodLogo";
import ARCLogo from "./my_components/elements/ARCLogo";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen p-10">
      <div className="hero flex gap-5 items-center justify-center bg-[var(--primary-blue)] w-full h-full rounded-md font-title">
        <ARCLogo />
        <DodLogo />
      </div>
    </div>
  );
}
