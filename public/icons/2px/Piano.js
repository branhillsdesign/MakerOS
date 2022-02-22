import * as React from "react";

const SvgPiano = ({ title, titleId, ...props }) => (
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
      d="M23 17V7h-2v10h2ZM3 19h18v-2H3v2ZM1 7v10h2V7H1Zm5-2H3v2h3V5ZM5 6v6h2V6H5Zm5-1H6v2h4V5ZM9 6v6h2V6H9Zm5-1h-4v2h4V5Zm-1 1v6h2V6h-2Zm8-1h-3v2h3V5Zm-3 0h-4v2h4V5Zm-1 1v6h2V6h-2ZM3 7V5a2 2 0 0 0-2 2h2Zm20 0a2 2 0 0 0-2-2v2h2Zm-2 10v2a2 2 0 0 0 2-2h-2ZM3 17H1a2 2 0 0 0 2 2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPiano;
