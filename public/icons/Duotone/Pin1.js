import * as React from "react";

const SvgPin1 = ({ title, titleId, ...props }) => (
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
      d="M12 15v7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M6 4h2m10 0h-2M8 4v8l-2.71 1.807A.651.651 0 0 0 5.651 15H18.35a.651.651 0 0 0 .361-1.193L16 12V4M8 4h8"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPin1;
