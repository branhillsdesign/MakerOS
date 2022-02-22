import * as React from "react";

const SvgWatch6 = ({ title, titleId, ...props }) => (
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
      d="M9 8c0-.99.196-3.55.977-5.932A.1.1 0 0 1 10.072 2h3.856a.1.1 0 0 1 .095.068C14.803 4.45 15 7.01 15 8m-6 8c0 .99.196 3.55.977 5.932a.1.1 0 0 0 .095.068h3.856a.1.1 0 0 0 .095-.068C14.803 19.55 15 16.99 15 16"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9 8a4.992 4.992 0 0 0-2 4c0 1.636.786 3.088 2 4 .836.628 1.874 1 3 1a4.978 4.978 0 0 0 3-1 4.993 4.993 0 0 0 2-4 4.993 4.993 0 0 0-2-4 4.978 4.978 0 0 0-3-1 4.978 4.978 0 0 0-3 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWatch6;
