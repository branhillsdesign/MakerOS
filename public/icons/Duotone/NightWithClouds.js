import * as React from "react";

const SvgNightwithClouds = ({ title, titleId, ...props }) => (
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
      d="M14.5 8.706a5.64 5.64 0 0 0 2.686-6.516c-.023-.08.052-.153.129-.124A5.644 5.644 0 0 1 20.345 10"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="m15.814 9.326-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgNightwithClouds;
