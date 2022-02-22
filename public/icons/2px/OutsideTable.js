import * as React from "react";

const SvgOutsideTable = ({ title, titleId, ...props }) => (
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
      d="M8 17h1v-1H8v1Zm8 0v-1h-1v1h1ZM5 8l-.581-.814L1.879 9H5V8Zm7-5 .581-.814L12 1.771l-.581.415L12 3Zm7 5v1h3.12l-2.539-1.814L19 8ZM2.02 12.196l1 5 1.96-.392-1-5-1.96.392ZM4 18h4v-2H4v2Zm3-1v5h2v-5H7Zm-4 0v5h2v-5H3Zm17.02-5.196-1 5 1.96.392 1-5-1.96-.392ZM20 16h-4v2h4v-2Zm-5 1v5h2v-5h-2Zm4 0v5h2v-5h-2Zm-6 5V8h-2v14h2ZM12 7H5v2h7V7ZM5.581 8.814l7-5-1.162-1.628-7 5L5.58 8.814Zm5.838-5 7 5 1.162-1.628-7-5-1.162 1.628ZM19 7h-7v2h7V7Z"
      fill="#555770"
    />
  </svg>
);

export default SvgOutsideTable;
