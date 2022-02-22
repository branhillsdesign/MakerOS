import * as React from "react";

const SvgBatteryQuestion = ({ title, titleId, ...props }) => (
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
    <path d="M14 4h3v17H7V4h4V2h2v2h1Z" stroke="#555770" strokeWidth={2} />
    <path
      d="M10 10.925C10 9.81 10.957 9 12.022 9 13.086 9 14 9.809 14 10.925c0 .86-.736 1.134-1.412 1.856-.386.412-.588.932-.588 1.219m0 1v1.5"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBatteryQuestion;
