import * as React from "react";

const SvgAddCamera = ({ title, titleId, ...props }) => (
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
      d="M12 4h2.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H21a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6"
      stroke="#555770"
      strokeWidth={2}
    />
    <circle cx={12} cy={12} r={4} stroke="#555770" strokeWidth={2} />
    <path d="M4 1v8m4-4H0" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgAddCamera;
