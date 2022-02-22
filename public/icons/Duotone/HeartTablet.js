import * as React from "react";

const SvgHeartTablet = ({ title, titleId, ...props }) => (
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
      d="M18 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M10 9c-1.105 0-2 .922-2 2.059 0 .463.03 1.026.543 1.642C9.055 13.316 12 16 12 16s2.945-2.684 3.457-3.3c.513-.615.543-1.178.543-1.641C16 9.922 15.105 9 14 9s-2 .922-2 2.059C12 9.922 11.105 9 10 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeartTablet;
