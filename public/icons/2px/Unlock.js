import * as React from "react";

const SvgUnlock = ({ title, titleId, ...props }) => (
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
      d="M16 11H8v2h8v-2Zm-7 1V9H7v3h2Zm-1-1h-.9v2H8v-2Zm-2 1.1V18h2v-5.9H6ZM8 20h8v-2H8v2Zm10-2v-5.9h-2V18h2Zm-1.1-7H16v2h.9v-2Zm1.1 1.1a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2ZM7.1 11A1.1 1.1 0 0 0 6 12.1h2a.9.9 0 0 1-.9.9v-2Zm8.9 9a2 2 0 0 0 2-2h-2v2ZM12 6a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM6 18a2 2 0 0 0 2 2v-2H6Zm6-14a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3V4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUnlock;
