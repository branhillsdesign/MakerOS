import * as React from "react";

const SvgRoomService = ({ title, titleId, ...props }) => (
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
    <path d="M2 18h20" stroke="#555770" strokeWidth={2} />
    <path
      d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 0a8.001 8.001 0 0 1 7.938 7H4.062A8.001 8.001 0 0 1 12 7Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRoomService;
