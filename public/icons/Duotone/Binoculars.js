import * as React from "react";

const SvgBinoculars = ({ title, titleId, ...props }) => (
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
      d="M5 20v-4h3v4H3.5h6m6.5 0v-4h3v4h-4.5 6m-11-10h5M12 8.5v3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M3.5 3h6m-6 0v13h6V3m-6 0H2h7.5m0 0H11m3.5 0h6m-6 0H13h7.5m-6 0v13h6V3m0 0H22"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBinoculars;
