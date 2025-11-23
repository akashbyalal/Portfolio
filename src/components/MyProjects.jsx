import React from "react";
import GlassIcons from "./reactbits/GlassIcons/GlassIcons.jsx";

function MyProject() {
  const items = [
    {
      short: "TL",
      label: "To-Do List",
      color: "blue",
      url: "https://to-do-list-inky-nine-55.vercel.app/",
    },
    {
      short: "PF",
      label: "Portfolio",
      color: "purple",
      url: window.location.href,
    },
    {
      short: "+",
      label: "More Soon",
      color: "green",
      url: null,
    },
  ];

  const handleClick = (url) => {
    if (!url) return;
    if (url === window.location.href) {
      window.location.reload();
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-full py-20">
      <div className="text-center mt-30 mb-30 text-6xl new-rocker-regular">
        My Projects
      </div>

      <div
        className="
          w-full 
          flex 
          justify-center 
          items-start
          px-4
        "
        style={{
          height: "600px",
          position: "relative",
        }}
      >
        <div className="flex justify-center w-full max-w-[900px]">
          <GlassIcons
            items={items.map((i) => ({
              ...i,
              onClick: () => handleClick(i.url),
            }))}
            className="custom-class"
          />
        </div>
      </div>
    </div>
  );
}

export default MyProject;
