import * as React from "react";

const SvgDiscoball = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M21 13H3m9 9V4.223M7.023 5.5v15m9.954-15v15M4.516 8h14.969M4.514 18h14.97"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M10 4.223V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.223m-4 0h4m-4 0A8.951 8.951 0 0 0 7.023 5.5 9.05 9.05 0 0 0 4.516 8 8.958 8.958 0 0 0 3 13c0 1.85.558 3.57 1.516 5a9.05 9.05 0 0 0 2.507 2.5A8.958 8.958 0 0 0 12 22c1.84 0 3.551-.552 4.977-1.5a9.05 9.05 0 0 0 2.508-2.5A8.959 8.959 0 0 0 21 13c0-1.85-.558-3.57-1.515-5a9.05 9.05 0 0 0-2.508-2.5A8.951 8.951 0 0 0 14 4.223"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDiscoball;
