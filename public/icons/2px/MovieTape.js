import * as React from "react";

const SvgMovieTape = ({ title, titleId, ...props }) => (
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
      d="M21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11h-2Zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11v-2Zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12h2Zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11v2ZM9 14.5a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H9Zm-1 1a1 1 0 0 1-1-1H5a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm9 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm-3-6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMovieTape;
