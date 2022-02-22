import * as React from "react";

const Svg = ({ title, titleId, ...props }) => (
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
      d="M15.4 12a3.4 3.4 0 0 1-3.4 3.4v1.2a4.6 4.6 0 0 0 4.6-4.6h-1.2ZM12 15.4A3.4 3.4 0 0 1 8.6 12H7.4a4.6 4.6 0 0 0 4.6 4.6v-1.2ZM8.6 12A3.4 3.4 0 0 1 12 8.6V7.4A4.6 4.6 0 0 0 7.4 12h1.2ZM12 8.6a3.4 3.4 0 0 1 3.4 3.4h1.2A4.6 4.6 0 0 0 12 7.4v1.2Zm0 11.8A8.4 8.4 0 0 1 3.6 12H2.4a9.6 9.6 0 0 0 9.6 9.6v-1.2ZM3.6 12A8.4 8.4 0 0 1 12 3.6V2.4A9.6 9.6 0 0 0 2.4 12h1.2ZM12 3.6a8.4 8.4 0 0 1 8.4 8.4h1.2A9.6 9.6 0 0 0 12 2.4v1.2Zm0 18h5v-1.2h-5v1.2Zm8.4-8.1a1.9 1.9 0 0 1-1.9 1.9v1.2a3.1 3.1 0 0 0 3.1-3.1h-1.2Zm-1.9 1.9a1.9 1.9 0 0 1-1.9-1.9h-1.2a3.1 3.1 0 0 0 3.1 3.1v-1.2Zm3.1-1.9V12h-1.2v1.5h1.2Zm-5 0V12h-1.2v1.5h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default Svg;
