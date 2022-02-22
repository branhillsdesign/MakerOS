import * as React from "react";

const SvgBulletPointsDots = ({ title, titleId, ...props }) => (
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
    <path d="M7 6h14M7 12h14M7 18h14" stroke="#555770" strokeWidth={1.2} />
    <path
      clipRule="evenodd"
      d="M2 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0Zm0 6a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgBulletPointsDots;
