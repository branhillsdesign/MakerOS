import * as React from "react";

const SvgHeartMessage = ({ title, titleId, ...props }) => (
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
      d="M20 4H4a1 1 0 0 0-1 1v14.792a.1.1 0 0 0 .162.078L6.75 17H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M10 7c-1.105 0-2 .922-2 2.059 0 .463.03 1.026.543 1.642C9.055 11.316 12 14 12 14s2.945-2.684 3.457-3.3c.513-.615.543-1.178.543-1.641C16 7.922 15.105 7 14 7s-2 .922-2 2.059C12 7.922 11.105 7 10 7Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeartMessage;
