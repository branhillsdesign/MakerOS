import * as React from "react";

const SvgSwitchVideo = ({ title, titleId, ...props }) => (
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
      d="m21.83 7.17-4.123 4.123a1 1 0 0 0 0 1.414l4.122 4.122a.1.1 0 0 0 .171-.07V7.24a.1.1 0 0 0-.17-.07Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M2 7a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M7 12v-1l-1 1 1 1v-1Zm0 0h5m0 0v-1l1 1-1 1v-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSwitchVideo;
