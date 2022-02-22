import * as React from "react";

const SvgDiamondRing = ({ title, titleId, ...props }) => (
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
      d="M12 6 9 3.333 10.364 2h3.272L15 3.333 12 6Zm0 0h.105M12 6h-.102"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDiamondRing;
