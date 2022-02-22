import * as React from "react";

const SvgPhoneStandard = ({ title, titleId, ...props }) => (
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
      d="M17 5h.6v-.6H17V5ZM9 21.6h6v-1.2H9v1.2Zm6-19.2H9v1.2h6V2.4Zm2 2H7v1.2h10V4.4ZM6.4 5v14h1.2V5H6.4Zm11.2 14V5h-1.2v14h1.2ZM7 19.6h10v-1.2H7v1.2Zm8-16A1.4 1.4 0 0 1 16.4 5h1.2A2.6 2.6 0 0 0 15 2.4v1.2Zm0 18a2.6 2.6 0 0 0 2.6-2.6h-1.2a1.4 1.4 0 0 1-1.4 1.4v1.2Zm-6-1.2A1.4 1.4 0 0 1 7.6 19H6.4A2.6 2.6 0 0 0 9 21.6v-1.2Zm0-18A2.6 2.6 0 0 0 6.4 5h1.2A1.4 1.4 0 0 1 9 3.6V2.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPhoneStandard;
