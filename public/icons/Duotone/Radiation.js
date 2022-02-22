import * as React from "react";

const SvgRadiation = ({ title, titleId, ...props }) => (
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
      d="M15 12h7a9.996 9.996 0 0 1-5 8.662L13.5 14.6M9 12H2a9.996 9.996 0 0 0 5 8.662l3.5-6.063m3-5.198L17 3.338A9.954 9.954 0 0 0 12 2c-1.821 0-3.53.487-5 1.338L10.5 9.4"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M15 12a2.999 2.999 0 1 1-6 0 2.999 2.999 0 0 1 4.5-2.599A2.999 2.999 0 0 1 15 12Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRadiation;
