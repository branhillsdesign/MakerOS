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
      d="M16 11.4H8v1.2h8v-1.2Zm-7.4.6V9H7.4v3h1.2Zm-.6-.6h-.9v1.2H8v-1.2Zm-1.6.7V18h1.2v-5.9H6.4ZM8 19.6h8v-1.2H8v1.2Zm9.6-1.6v-5.9h-1.2V18h1.2Zm-.7-6.6H16v1.2h.9v-1.2Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-10.5-.7a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5v-1.2Zm8.9 8.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-4-14A3.4 3.4 0 0 1 15.4 9h1.2A4.6 4.6 0 0 0 12 4.4v1.2ZM6.4 18A1.6 1.6 0 0 0 8 19.6v-1.2a.4.4 0 0 1-.4-.4H6.4ZM12 4.4A4.6 4.6 0 0 0 7.4 9h1.2A3.4 3.4 0 0 1 12 5.6V4.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUnlock;
