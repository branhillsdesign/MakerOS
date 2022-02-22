import * as React from "react";

const SvgCup = ({ title, titleId, ...props }) => (
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
    <path d="M12 14.539V20m-5 0h5m0 0h5" stroke="#555770" strokeWidth={2} />
    <path
      d="M16 12h1.5a3.5 3.5 0 1 0 0-7H16v7Zm0 0c-.796 1.692-2.398 2.538-4 2.538-1.602 0-3.204-.846-4-2.538m0 0H6.5a3.5 3.5 0 1 1 0-7H8v7Zm10-8H6"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCup;
