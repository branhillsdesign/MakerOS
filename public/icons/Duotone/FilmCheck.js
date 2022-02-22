import * as React from "react";

const SvgFilmCheck = ({ title, titleId, ...props }) => (
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
      d="M9 12.154 11.063 14 15 10M2 1v3m0 19v-3M22 1v3m0 19v-3M2 4h4v4M2 4v4m0 0h4M2 8v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4H2M22 4h-4v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4h4m0-4v4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M6 2h12v20H6V2Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgFilmCheck;
