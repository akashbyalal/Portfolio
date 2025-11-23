import LogoLoop from "./reactbits/LogoLoop/LogoLoop.jsx";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

function LogLoop() {
  const techLogos = [
    {
      node: (
        <div style={{ width: 48, height: 48 }}>
          <SiReact className="w-full h-full" />
        </div>
      ),
      title: "React",
      href: "https://react.dev",
    },
    {
      node: (
        <div style={{ width: 48, height: 48 }}>
          <SiNextdotjs className="w-full h-full" />
        </div>
      ),
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: (
        <div style={{ width: 48, height: 48 }}>
          <SiTypescript className="w-full h-full" />
        </div>
      ),
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: (
        <div style={{ width: 48, height: 48 }}>
          <SiTailwindcss className="w-full h-full" />
        </div>
      ),
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <div className="h-[400px] w-full relative overflow-hidden">
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
      />

      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
        fadeOutColor="#000000"
      />
    </div>
  );
}

export default LogLoop;
