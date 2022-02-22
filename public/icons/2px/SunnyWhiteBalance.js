import * as React from "react";

const SvgSunnyWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="M16 12a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-4 4a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6v-2Zm-4-4a4 4 0 0 1 4-4V6a6 6 0 0 0-6 6h2Zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6v2Zm-1-7v3h2V1h-2Zm0 19v3h2v-3h-2Zm12-9h-3v2h3v-2ZM4 11H1v2h3v-2Zm15.071-7.485L16.95 5.636l1.414 1.414 2.121-2.121-1.414-1.414ZM5.636 16.95 3.515 19.07l1.414 1.414 2.121-2.121-1.414-1.414Zm14.85 2.121-2.122-2.121-1.414 1.414 2.121 2.121 1.414-1.414ZM7.05 5.636 4.93 3.515 3.515 4.929 5.636 7.05 7.05 5.636Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSunnyWhiteBalance;
