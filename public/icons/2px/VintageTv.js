import * as React from "react";

const SvgVintageTv = ({ title, titleId, ...props }) => (
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
      d="M20 9v12h2V9h-2Zm0 12H4v2h16v-2ZM4 21V9H2v12h2Zm1-7v2h2v-2H5Zm4 6h4v-2H9v2Zm8-4v-2h-2v2h2Zm-4-6H9v2h4v-2Zm5 2h1v-2h-1v2ZM4 9h7V7H4v2Zm.293-6.293 6 6 1.414-1.414-6-6-1.414 1.414ZM11 9h2V7h-2v2Zm2 0h7V7h-7v2Zm.707-.293 6-6-1.414-1.414-6 6 1.414 1.414ZM17 14a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2h2Zm-4 6a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2v2Zm-8-4a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2H5Zm2-2a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4h2Zm-3 7H2a2 2 0 0 0 2 2v-2Zm16 0v2a2 2 0 0 0 2-2h-2Zm2-12a2 2 0 0 0-2-2v2h2ZM4 9V7a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgVintageTv;
