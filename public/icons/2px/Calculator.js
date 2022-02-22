import * as React from "react";

const SvgCalculator = ({ title, titleId, ...props }) => (
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
      d="M8 5V4H7v1h1Zm0 5H7v1h1v-1Zm8 0v1h1v-1h-1Zm0-5h1V4h-1v1ZM5 21H4h1ZM5 3H4h1Zm1 20h12v-2H6v2Zm14-2V3h-2v18h2ZM4 3v18h2V3H4Zm14-2H6v2h12V1ZM7 5v5h2V5H7Zm1 6h8V9H8v2Zm9-1V5h-2v5h2Zm-1-6H8v2h8V4ZM7 17h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8-3h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8 6h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm5-17a2 2 0 0 0-2-2v2h2Zm-2 20a2 2 0 0 0 2-2h-2v2ZM6 21H4a2 2 0 0 0 2 2v-2ZM6 3V1a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCalculator;
