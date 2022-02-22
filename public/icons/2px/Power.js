import * as React from "react";

const SvgPower = ({ title, titleId, ...props }) => (
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
      d="M9 2a1 1 0 0 0-2 0h2ZM5 14H4v.414l.293.293L5 14Zm5 5h1v-.414l-.293-.293L10 19Zm0 3H9v1h1v-1Zm7-20a1 1 0 1 0-2 0h2Zm2 12 .707.707.293-.293V14h-1Zm-5 5-.707-.707-.293.293V19h1Zm0 3v1h1v-1h-1ZM7 2v6h2V2H7Zm1 5H6v2h2V7ZM4 9v5h2V9H4Zm.293 5.707 5 5 1.414-1.414-5-5-1.414 1.414ZM9 19v3h2v-3H9Zm6-17v6h2V2h-2Zm1 7h2V7h-2v2Zm2 0v5h2V9h-2Zm.293 4.293-5 5 1.414 1.414 5-5-1.414-1.414ZM13 19v3h2v-3h-2ZM8 9h8V7H8v2Zm2 14h4v-2h-4v2Zm8-14h2a2 2 0 0 0-2-2v2ZM6 7a2 2 0 0 0-2 2h2V7Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPower;
