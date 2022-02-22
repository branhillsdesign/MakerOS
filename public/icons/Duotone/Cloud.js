import * as React from "react";

const SvgCloud = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Cloud_svg__a)">
      <path
        d="m15.814 9.326-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Cloud_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={5}
        width={25}
        height={24}
      >
        <path
          transform="rotate(45 18.576 5.206)"
          fill="#000"
          d="M18.576 5.206h12.159v20.717H18.576z"
        />
      </mask>
      <g mask="url(#Cloud_svg__b)">
        <path
          d="m15.814 9.326-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Cloud_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloud;
