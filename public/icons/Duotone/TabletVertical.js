import * as React from "react";

const SvgTabletVertical = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Tablet_Vertical_svg__a)">
      <path
        d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <mask
        id="Tablet_Vertical_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={0}
        width={18}
        height={24}
      >
        <path d="M21 24 3 0v24h18Z" fill="#000" />
      </mask>
      <g mask="url(#Tablet_Vertical_svg__b)">
        <path
          d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
          stroke="#555770"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Tablet_Vertical_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTabletVertical;
