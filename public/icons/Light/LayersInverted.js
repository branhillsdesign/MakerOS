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
        x={20.4}
        y={16.4}
        width={12.8}
        height={12.8}
        rx={1.4}
        transform="rotate(-180 20.4 16.4)"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path
      d="M15 20.4H5A1.4 1.4 0 0 1 3.6 19V9A1.4 1.4 0 0 1 5 7.6h10A1.4 1.4 0 0 1 16.4 9v10a1.4 1.4 0 0 1-1.4 1.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgLayersInverted;
