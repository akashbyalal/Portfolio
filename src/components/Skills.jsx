import ElectricBorder from "./reactbits/ElectricBorder/ElectricBorder.jsx";


import HTML from "./images/html.png";
import CSSLogo from "./images/css.png";
import GitLogo from "./images/git.png";
import JSLogo from "./images/js.png";
import TailwindLogo from "./images/tailwind.png";
import BootstrapLogo from "./images/bootstrap.png";
import ReactLogo from "./images/react.png";
import NodeLogo from "./images/node.png";
import MongoLogo from "./images/mongo.png";

function Skills() {
  const skills = [
    { img: HTML, name: "HTML", percent: 100 },
    { img: CSSLogo, name: "CSS", percent: 90 },
    { img: GitLogo, name: "Git / GitHub", percent: 90 },
    { img: JSLogo, name: "JavaScript", percent: 85 },
    { img: TailwindLogo, name: "Tailwind CSS", percent: 85 },
    { img: BootstrapLogo, name: "Bootstrap", percent: 90 },
    { img: ReactLogo, name: "React", percent: 85 },
    { img: NodeLogo, name: "Node.js", percent: 30 },
    { img: MongoLogo, name: "MongoDB", percent: 30 },
  ];

  return (
    <div>
      
    <div className="flex flex-wrap gap-6 m-5 justify-center">
      {skills.map((skill, i) => (
        <ElectricBorder
          key={i}
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div
            className="
              flex h-32 w-[380px] p-3
              bg-gradient-to-br from-[#0a0a0acc] via-[#0f0f0fcc] to-[#000000dd]
              backdrop-blur-sm
              rounded-[16px]
              items-center gap-4
            "
          >
            {/* ICON */}
            <img src={skill.img} className="h-20" alt={skill.name} />

            {/* TEXT + BAR */}
            <div className="flex-1">
              <div
                role="progressbar"
                aria-valuenow={skill.percent}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="flex justify-between gap-4 mt-2">
                  <span className="text-sm font-medium text-white">
                    {skill.name}
                  </span>

                  <span className="text-sm font-medium text-white">
                    {skill.percent}%
                  </span>
                </div>

                <div className="mt-2 h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </ElectricBorder>
      ))}
    </div>
    </div>
  );
}

export default Skills;
