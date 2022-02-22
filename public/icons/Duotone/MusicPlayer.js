import * as React from "react";

const SvgMusicPlayer = ({ title, titleId, ...props }) => (
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
      d="M18 10.5h.4a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 1-.1.1h-.8a.1.1 0 0 1-.1-.1v-2.3a.1.1 0 0 1 .1-.1h.4Zm0 0V9l-6.955-6.955M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2c-.322 0-.64.015-.955.045C5.97 2.525 2 6.799 2 12c0 5.523 4.477 10 10 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMusicPlayer;
