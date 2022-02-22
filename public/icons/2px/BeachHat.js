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
      d="M6 11.8V8c0-2.21 2.686-4 6-4s6 1.79 6 4v3.8m-12 0V13c0 1.105 2.686 2 6 2 1.537 0 2.938-.193 4-.51M6 11.8c-2.429.73-4 1.891-4 3.2 0 2.21 4.477 4 10 4 2.987 0 5.668-.524 7.5-1.354M18 11.8V13c0 .592-.773 1.124-2 1.49m2-2.69c2.429.73 4 1.891 4 3.2 0 1.014-.944 1.94-2.5 2.646M18 10c0 1.105-2.686 2-6 2s-6-.895-6-2m10 4.49 3.5 3.156m0 0V22"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBeachHat;
