import * as React from "react";

const SvgBeachHat = ({ title, titleId, ...props }) => (
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
      d="M16 14.49c1.227-.366 2-.898 2-1.49v-3c0 1.105-2.686 2-6 2s-6-.895-6-2v3c0 1.105 2.686 2 6 2 1.537 0 2.938-.193 4-.51Zm0 0 3.5 3.156V22"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M2 15c0 2.21 4.477 4 10 4 2.987 0 5.668-.524 7.5-1.354C21.056 16.94 22 16.014 22 15c0-1.309-1.571-2.47-4-3.2V8c0-2.21-2.686-4-6-4S6 5.79 6 8v3.8c-2.429.73-4 1.891-4 3.2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBeachHat;
