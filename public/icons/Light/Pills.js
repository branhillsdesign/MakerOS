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
      d="M18 7v.6h.6V7H18ZM6 7h-.6v.6H6V7Zm5 4v-.6h-.6v.6h.6Zm0 6h-.6v.6h.6V17ZM7 3.6h10V2.4H7v1.2Zm10.4.4v3h1.2V4h-1.2ZM6.6 7V4H5.4v3h1.2Zm.4-.6H6v1.2h1V6.4Zm-.6.6v12h1.2V7H6.4ZM9 21.6h6v-1.2H9v1.2Zm9-15.2h-1v1.2h1V6.4Zm-1 0H7v1.2h10V6.4Zm.6 4.6V7h-1.2v4h1.2Zm-.6-.6h-6v1.2h6v-1.2Zm-6.6.6v6h1.2v-6h-1.2Zm7.2 8v-2h-1.2v2h1.2Zm0-2v-6h-1.2v6h1.2Zm-6.6.6h6v-1.2h-6v1.2Zm4 4a2.6 2.6 0 0 0 2.6-2.6h-1.2a1.4 1.4 0 0 1-1.4 1.4v1.2Zm2-18c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 17 2.4v1.2ZM6.4 19A2.6 2.6 0 0 0 9 21.6v-1.2A1.4 1.4 0 0 1 7.6 19H6.4ZM7 2.4A1.6 1.6 0 0 0 5.4 4h1.2c0-.22.18-.4.4-.4V2.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPills;
