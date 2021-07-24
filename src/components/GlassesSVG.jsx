import React from "react";

const GlassesSVG = ({ h, fillColor }) => {
  return (
    <svg
      className={`fill-current h-${h || "40"} text-${fillColor || ""}`}
      viewBox="0 0 111.2898 48.1899"
    >
      <g>
        <path d="M55.6449 24.095L41.7337 48.1898H13.9112L0 24.0949 13.9112 0h27.8225zM111.2898 24.095L97.3786 48.1898H69.556L55.645 24.0949 69.5561 0h27.8225z" />
      </g>
    </svg>
  );
};

export default GlassesSVG;
