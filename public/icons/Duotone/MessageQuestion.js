import * as React from "react";

const SvgMessageQuestion = ({ title, titleId, ...props }) => (
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
      d="M10.5 9c0-.957.838-1.65 1.769-1.65C13.2 7.35 14 8.043 14 9c0 .737-.644.972-1.236 1.591-.337.353-.495.904-.495 1.15m0 .909V14"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMessageQuestion;
