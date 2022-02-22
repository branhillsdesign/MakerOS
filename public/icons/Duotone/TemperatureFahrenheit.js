import * as React from "react";

const SvgTemperatureFahrenheit = ({ title, titleId, ...props }) => (
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
      d="M6 17.05a2.5 2.5 0 1 0 1 0m-1 0a2.511 2.511 0 0 1 1 0m-1 0V3.5a.5.5 0 0 1 1 0v13.55"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M15 11V7m5-4h-5v4m0 0h4" stroke="currentColor" strokeWidth={2} />
    <circle cx={10.5} cy={3.5} r={1.5} fill="currentColor" />
  </svg>
);

export default SvgTemperatureFahrenheit;
