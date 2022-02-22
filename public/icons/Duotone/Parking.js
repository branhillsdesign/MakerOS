import * as React from "react";

const SvgParking = ({ title, titleId, ...props }) => (
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
      d="M8 20v-6m0 0V6h5a4 4 0 0 1 0 8H8Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Parking_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={1}
      width={7}
      height={22}
    >
      <path transform="matrix(-1 0 0 1 9 1)" fill="#000" d="M0 0h7v22H0z" />
    </mask>
    <g mask="url(#Parking_svg__a)">
      <path
        d="M8 20v-6m0 0V6h5a4 4 0 0 1 0 8H8Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgParking;
