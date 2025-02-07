import DodLogo from "./my_components/elements/DodLogo";
import ARCLogo from "./my_components/elements/ARCLogo";

export default function Home() {
  return (
    <div className="relative items-center justify-center h-screen w-screen p-10">
      <div className="hero flex flex-col gap-5 items-center justify-center bg-[var(--primary-blue)] w-full h-full rounded-md font-title">
        <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-center">
          <ARCLogo />
          <DodLogo />
        </div>
      </div>
    </div>
  );
}
