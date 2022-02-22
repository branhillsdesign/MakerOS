import * as React from "react";

const SvgSeastar = ({ title, titleId, ...props }) => (
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
      d="m12 3 2.347 6.174L21 10.52l-5.202 3.078L17.562 21 12 16.33 6.438 21l1.764-7.403L3 10.519l6.653-1.345L12 3Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSeastar;
