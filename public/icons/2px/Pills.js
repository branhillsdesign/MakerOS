import * as React from "react";

const SvgPills = ({ title, titleId, ...props }) => (
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
      d="M18 7v1h1V7h-1ZM6 7H5v1h1V7Zm5 4v-1h-1v1h1Zm0 6h-1v1h1v-1ZM7 4h10V2H7v2Zm10 0v3h2V4h-2ZM7 7V4H5v3h2Zm0-1H6v2h1V6ZM6 7v12h2V7H6Zm3 15h6v-2H9v2Zm9-16h-1v2h1V6Zm-1 0H7v2h10V6Zm1 5V7h-2v4h2Zm-1-1h-6v2h6v-2Zm-7 1v6h2v-6h-2Zm8 8v-2h-2v2h2Zm0-2v-6h-2v6h2Zm-7 1h6v-2h-6v2Zm4 4a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm2-18h2a2 2 0 0 0-2-2v2ZM6 19a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H6ZM7 2a2 2 0 0 0-2 2h2V2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPills;
