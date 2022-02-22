import * as React from "react";

const SvgSpeaker = ({ title, titleId, ...props }) => (
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
      d="M12 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM12 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18.9 22H5.1a.1.1 0 0 1-.1-.1V2.1a.1.1 0 0 1 .1-.1h13.8a.1.1 0 0 1 .1.1v19.8a.1.1 0 0 1-.1.1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSpeaker;
