import * as React from "react";

const SvgGasCharging = ({ title, titleId, ...props }) => (
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
      d="M19.414 7.586A2 2 0 1 0 20 9m-.586-1.414L15.828 4m3.586 3.586c.39.39.586.902.586 1.414m0 0v9.5a2 2 0 0 1-4 0V14a1 1 0 0 0-1-1h-2"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M13 11V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6m8 0v9H5v-9m8 0H5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGasCharging;
