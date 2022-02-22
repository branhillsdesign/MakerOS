import * as React from "react";

const SvgPlane = ({ title, titleId, ...props }) => (
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
      d="m11.26 10.293.74-.435.74.435 4.827 2.84-3.644-1.072L12 11.495l-1.923.566-3.644 1.072 4.828-2.84Z"
      stroke="#555770"
      strokeWidth={3}
    />
    <mask
      id="Plane_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={1}
      width={10}
      height={22}
    >
      <path transform="matrix(-1 0 0 1 12 1)" fill="#000" d="M0 0h10v22H0z" />
    </mask>
    <g mask="url(#Plane_svg__a)">
      <path
        d="m11.26 10.293.74-.435.74.435 4.827 2.84-3.644-1.072L12 11.495l-1.923.566-3.644 1.072 4.828-2.84Z"
        stroke="currentColor"
        strokeWidth={3}
      />
    </g>
  </svg>
);

export default SvgPlane;
