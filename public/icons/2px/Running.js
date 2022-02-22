import * as React from "react";

const SvgRunning = ({ title, titleId, ...props }) => (
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
      d="M12 7a.996.996 0 0 0-.5.134M12 7l-1.187 7.11L14 16.5M12 7a1 1 0 0 1 .918.603M14 23v-6.5M7 13V9l4.5-1.866m0 0a1 1 0 0 0-.485.694L9 18l-6-1m11-.5V16l-2-2 .98-5.798a1.002 1.002 0 0 0-.062-.6m0 0C13.445 9.069 15.4 12 19 12"
      stroke="#555770"
      strokeWidth={2}
    />
    <circle cx={13.5} cy={3.5} r={2} fill="#555770" />
  </svg>
);

export default SvgRunning;
