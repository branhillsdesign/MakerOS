import * as React from "react";

const SvgSunnywithClouds = ({ title, titleId, ...props }) => (
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
      d="M20.243 9.757 22.001 8l-1.758-1.757V3.757h-2.485L16 2l-1.757 1.757h-2.485v2.486"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m15.814 9.326-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSunnywithClouds;
