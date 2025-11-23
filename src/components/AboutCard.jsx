import SpotlightCard from "./reactbits/SpotlightCard/SpotlightCard.jsx";
import WebDev from "./images/webDev.png";
import BackEnd from "./images/backend.png";
import User from "./images/user.png";

function AboutCard() {
  return (
    <div className="flex-1">

      {/* CARD 1 */}
      <SpotlightCard
        className="custom-spotlight-card mt-4 mr-20 p-4 max-w-[600px]"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="text-left leading-snug">
          <div className="flex items-center">
            <img className="h-8" src={WebDev} alt="icon" />
            <span className="pl-2 text-[#73C1C3] text-xl">
              Web Development
            </span>
          </div>

          <p className="pt-4 text-[#73C1C3] max-w-[600px]">
            Creating responsive Websites and Web applications with modern frameworks.
          </p>
        </div>
      </SpotlightCard>

      {/* CARD 2 */}
      <SpotlightCard
        className="custom-spotlight-card mt-4 mr-20 p-4 max-w-[600px]"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="text-left leading-snug">
          <div className="flex items-center">
            <img className="h-8" src={User} alt="icon" />
            <span className="pl-2 text-[#73C1C3] text-xl">
              UI Implementation
            </span>
          </div>

          <p className="pt-4 text-[#73C1C3] max-w-[600px]">
            Designing clean, accessible, and functional user interfaces using modern CSS tools and component libraries.
          </p>
        </div>
      </SpotlightCard>

      {/* CARD 3 */}
      <SpotlightCard
        className="custom-spotlight-card mt-4 mr-20 p-4 max-w-[600px]"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="text-left leading-snug">
          <div className="flex items-center">
            <img className="h-8" src={BackEnd} alt="icon" />
            <span className="pl-2 text-[#73C1C3] text-xl">
              Backend Foundations
            </span>
          </div>

          <p className="pt-4 text-[#73C1C3] max-w-[600px]">
            Building basic server logic, APIs, and integrations while learning Node.js and Express to move toward full-stack development.
          </p>
        </div>
      </SpotlightCard>

    </div>
  );
}

export default AboutCard;
