import * as React from "react";

const SvgPlaneCrossed = ({ title, titleId, ...props }) => (
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
    <mask
      id="Plane_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Plane_Crossed_svg__a)">
      <path
        d="m11.26 10.293.74-.435.74.435 4.827 2.84-3.644-1.072L12 11.495l-1.923.566-3.644 1.072 4.828-2.84Z"
        stroke="#555770"
        strokeWidth={3}
      />
      <mask
        id="Plane_Crossed_svg__b"
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
      <g mask="url(#Plane_Crossed_svg__b)">
        <path
          d="m11.26 10.293.74-.435.74.435 4.827 2.84-3.644-1.072L12 11.495l-1.923.566-3.644 1.072 4.828-2.84Z"
          stroke="currentColor"
          strokeWidth={3}
        />
        <path d="m3.524 4.942 15.5 15.5" stroke="#555770" strokeWidth={2} />
      </g>
    </g>
  </svg>
);

export default SvgPlaneCrossed;
