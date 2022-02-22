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
      d="M15 12a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3 3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5v-2Zm-3-3a3 3 0 0 1 3-3V7a5 5 0 0 0-5 5h2Zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm0 11a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10v-2Zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12h2Zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10v2Zm0 18h5v-2h-5v2Zm8-8.5a1.5 1.5 0 0 1-1.5 1.5v2a3.5 3.5 0 0 0 3.5-3.5h-2ZM18.5 15a1.5 1.5 0 0 1-1.5-1.5h-2a3.5 3.5 0 0 0 3.5 3.5v-2Zm3.5-1.5V12h-2v1.5h2Zm-5 0V12h-2v1.5h2Z"
      fill="#555770"
    />
  </svg>
);

export default Svg;
