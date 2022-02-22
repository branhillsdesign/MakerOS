import * as React from "react";

const SvgSuitcase = ({ title, titleId, ...props }) => (
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
      d="M8 8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-4M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 8h8m-4 4v4"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgSuitcase;
