import * as React from "react";

const SvgChartArrow = ({ title, titleId, ...props }) => (
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
      d="m8 11 .707-.707L8 9.586l-.707.707L8 11Zm4 4-.707.707.707.707.707-.707L12 15Zm8-8h1V6h-1v1ZM4 20H3v1h1v-1Zm.707-4.293 4-4-1.414-1.414-4 4 1.414 1.414Zm2.586-4 4 4 1.414-1.414-4-4-1.414 1.414ZM20 6h-4v2h4V6Zm-1 1v4h2V7h-2ZM4 21h17v-2H4v2Zm1-1v-5H3v5h2Zm0-5V4H3v11h2Zm7.707.707 8-8-1.414-1.414-8 8 1.414 1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgChartArrow;
