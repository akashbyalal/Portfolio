import GooeyNav from "./components/reactbits/GooeyNav/GooeyNav.jsx";
import Particles from "./components/reactbits/Particles/Particles.jsx";
import "./index.css";
import Intro from "./components/IntroImg.jsx";
import Type from "./components/TypeStuff.jsx";
import AboutCard from "./components/AboutCard.jsx";
import Skills from "./components/Skills.jsx";
import MyProject from "./components/MyProjects.jsx";
import React from "react";

// global smooth-scroll handler
function handleNavClick(e) {
  const target = e.target.closest("[data-nav]");
  if (!target) return;
  const id = target.dataset.nav;
  const sec = document.getElementById(id);
  if (sec) sec.scrollIntoView({ behavior: "smooth" });
}

if (typeof window !== "undefined") {
  window.addEventListener("click", handleNavClick);
}

const items = [
  { label: "Home", nav: "home", href: "home" },
  { label: "About", nav: "about", href: "about" },
  { label: "Skills", nav: "skills", href: "skills" },
  { label: "Projects", nav: "projects", href: "projects" },
  { label: "Contact", nav: "contact", href: "contact" },
];

function App() {
  return (
    <>
      {/* PARTICLES */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <Particles
          particleColors={["#a4a0a0ff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        
        {/* ★★ FIXED, CENTERED, BLACK NAV BAR ★★ */}
        <div className="w-full flex justify-center fixed top-3 md:top-5 z-[10000]">
  <div
    className="
      bg-black 
      px-3 py-2            /* smaller padding on mobile */
      md:px-5 md:py-3      /* original padding on desktop */
      rounded-2xl
      overflow-hidden
      shadow-lg
      scale-75 sm:scale-90 md:scale-100   /* <-- THE FIX */
    "
  >
    <GooeyNav
      items={items}
      particleCount={15}
      particleDistances={[90, 10]}
      particleR={100}
      initialActiveIndex={0}
      animationTime={600}
      timeVariance={300}
      colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    />
  </div>
</div>

        {/* HOME */}
        <div id="home" className="Introduction mt-32 flex flex-col md:flex-row opacity-100">
          <div className="text-stone-50 text-left flex-col w-full md:w-7x1 pt-12 pl-5 pr-5 md:pl-10 md:pr-10">
            <h1 className="text-stone-50 text-4xl sm:text-5xl md:text-6xl caesar-dressing-regular pl-2 md:pl-5">
              Hi, I'm{" "}
              <a href="#" className="underline hover:text-blue-600">
                Akash Byalal
              </a>
            </h1>

            <div className="text-left p-3 md:p-5 pt-10 text-3xl sm:text-4xl md:text-5xl new-rocker-regular">
              <span>I'm your </span>
              <Type />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl macondo-regular text-left p-3 md:p-5 pt-5">
              I'm a self-taught developer aiming toward full-stack expertise,
              constantly building real projects to level up my skills and
              deliver clean, efficient, and user-focused digital experiences.
            </h2>

            <h2 className="p-5">
              <a
                className="group rounded-xl relative inline-block text-sm font-medium text-white"
                href="https://akash-byalal-resume.tiiny.site" target="_blank"
              >
                <span className="rounded-xl absolute inset-0 border border-sky-600"></span>
                <span className="rounded-xl block border border-red-600 bg-sky-600 px-5 py-3 text-2xl transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Download CV
                </span>
              </a>
            </h2>
          </div>

          <div
            className="pt-10 pr-0 md:pr-30 flex justify-center md:justify-end"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Intro />
          </div>
        </div>

        {/* ABOUT */}
        <div id="about" className="mt-20 pb-20 ">
          <div className="w-full text-center text-4xl sm:text-5xl md:text-6xl text-white new-rocker-regular pt-20  mt-10 mb-10">
            About Me
          </div>

          <div className="AboutMe flex flex-col md:flex-row ml-5 md:ml-15 text-center mb-30 gap-10">
            <div
              className="AboutDesc text-left merriweather-font max-w-[800px] flex-1 text-2xl sm:text-3xl md:text-4xl pr-5 md:pr-10 text-white"
            >
              <h3 className="pb-10">
                I’m a web developer learning full-stack and building better
                stuff.
              </h3>

              <h3>
                I’m a self-taught web developer skilled in React, Tailwind,
                Bootstrap, and Git. I focus on building clean, functional
                interfaces and I’m growing toward full-stack development. I’m
                currently looking for internship opportunities to gain real-world
                experience.
              </h3>
            </div>

            <div className="flex-1 flex justify-center md:justify-start">
              <AboutCard />
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills" className="text-center mt-20">
          <div className="new-rocker-regular text-4xl sm:text-5xl md:text-6xl mb-10">
            My Skills
          </div>
          <Skills />
        </div>

        {/* PROJECTS */}
        <div id="projects" className="mt-20">
          <MyProject />
        </div>

        {/* CONTACT */}
        <div
          id="contact"
          className="bg-black/40 backdrop-blur-md py-20 mt-40 text-white"
        >
          <div className="text-center text-4xl sm:text-5xl md:text-6xl new-rocker-regular mb-10">
            Contact Me
          </div>

          <div className="flex flex-col items-center text-2xl sm:text-3xl space-y-6 macondo-regular">
            <div>
              Email:{" "}
              <span className="text-blue-400">akashbyalal02@gmail.com</span>
            </div>

            <div>
              Phone: <span className="text-blue-400">+91 9480363644</span>
            </div>

            <div className="flex space-x-10 text-3xl sm:text-4xl pt-5">
              <a
                href="https://github.com/akashbyalal"
                target="_blank"
                className="hover:text-blue-300 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akash-byalal-023b97297/"
                target="_blank"
                className="hover:text-blue-300 transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:akashbyalal02@gmail.com"
                className="hover:text-blue-300 transition"
              >
                Email
              </a>
            </div>
          </div>

          <div className="text-center mt-10 opacity-50">
            © {new Date().getFullYear()} Akash Byalal. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
