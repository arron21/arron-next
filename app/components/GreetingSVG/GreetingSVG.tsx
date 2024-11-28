import React from "react";

const GreetingSVG = () => {
  const fontSize = "clamp(100px, 8vw + 20px, 100px)";
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 800 200"
      className="mx-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="50%"
        y="50%"
        fontSize={fontSize}
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="#1E90FF"
        strokeWidth="2"
        className="animated-text"
      >
        Hello, I’m Arron
      </text>
      <text
        x="50%"
        y="50%"
        fontSize={fontSize}
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#1E90FF"
        className="filled-text"
      >
        Hello, I’m Arron
      </text>
    </svg>
  );
};

export default GreetingSVG;
