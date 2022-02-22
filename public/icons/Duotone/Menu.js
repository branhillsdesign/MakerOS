import * as React from "react";

const SvgMenu = ({ title, titleId, ...props }) => (
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
      d="M14.5 11h5m-5 3.5h5m-5 3.5H18M4.5 11h5m-5 3.5h5m-5 3.5H8M18 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 22h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-9m0 20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9m0 20V2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMenu;
