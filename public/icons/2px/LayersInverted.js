import * as React from "react";

const SvgLayersInverted = ({ title, titleId, ...props }) => (
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
      id="Layers_Inverted_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={7}
      y={3}
      width={14}
      height={14}
    >
      <path d="M21 3v14h-1.867V4.867H7V3h14Z" fill="#fff" />
    </mask>
    <g mask="url(#Layers_Inverted_svg__a)">
      <rect
        x={20}
        y={16}
        width={12}
        height={12}
        rx={1}
        transform="rotate(-180 20 16)"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <path
      d="M15 20H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLayersInverted;
