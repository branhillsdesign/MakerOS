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
    <path
      d="M6.5 11.4a2.9 2.9 0 0 1-2.9-2.9H2.4a4.1 4.1 0 0 0 4.1 4.1v-1.2ZM3.6 8.5a2.9 2.9 0 0 1 2.9-2.9V4.4a4.1 4.1 0 0 0-4.1 4.1h1.2Zm16.8 0a2.9 2.9 0 0 1-2.9 2.9v1.2a4.1 4.1 0 0 0 4.1-4.1h-1.2Zm-2.9-2.9a2.9 2.9 0 0 1 2.9 2.9h1.2a4.1 4.1 0 0 0-4.1-4.1v1.2Zm-1.5-1h2V3.4h-2v1.2Zm1.5 6.8H16v1.2h1.5v-1.2ZM6 4.6h2V3.4H6v1.2Zm2 0h8V3.4H8v1.2Zm0 6.8H6.5v1.2H8v-1.2ZM7.4 4v1h1.2V4H7.4Zm0 1v7h1.2V5H7.4Zm-.9.6H8V4.4H6.5v1.2ZM15.4 4v1h1.2V4h-1.2Zm0 1v7h1.2V5h-1.2Zm2.1-.6H16v1.2h1.5V4.4ZM7.457 12.255c.904 1.922 2.73 2.883 4.543 2.883v-1.2c-1.39 0-2.768-.73-3.457-2.194l-1.086.511ZM12 15.139c1.813 0 3.639-.961 4.543-2.883l-1.086-.51c-.689 1.463-2.066 2.193-3.457 2.193v1.2ZM7 20.6h5v-1.2H7v1.2Zm5 0h5v-1.2h-5v1.2Zm-.6-6.062V20h1.2v-5.462h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCup;
