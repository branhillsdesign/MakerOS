import * as React from "react";

const SvgSalt = ({ title, titleId, ...props }) => (
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
      d="M14.5 13h-3a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18.1 6.524H5.9m12.2 0 .236.473a3 3 0 0 1 0 2.672l-.236.474m0-3.62c-.147-1.322-.93-2.495-2.1-3.315M5.9 6.524l-.236.473a3 3 0 0 0 0 2.672l.236.474m0-3.62c.147-1.322.93-2.495 2.1-3.315m-2.1 6.935h12.2m-12.2 0-.737 9.706A2 2 0 0 0 7.158 22h9.684a2 2 0 0 0 1.995-2.151l-.737-9.706M8 3.208a6.455 6.455 0 0 1 1.5-.776M8 3.208c.5.218 1.5.37 1.5-.776m0 0A7.319 7.319 0 0 1 12 2c.89 0 1.737.154 2.5.432m0 0a6.452 6.452 0 0 1 1.5.776m-1.5-.776c0 .494.3 1.342 1.5.776"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSalt;
