import * as React from "react";

const SvgLayers = ({ title, titleId, ...props }) => (
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
      id="Layers_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={7}
      width={14}
      height={14}
    >
      <path d="M3 21V7h1.867v12.133H17V21H3Z" fill="#fff" />
    </mask>
    <g mask="url(#Layers_svg__a)">
      <rect
        x={4}
        y={8}
        width={12}
        height={12}
        rx={1}
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
    <rect
      x={8}
      y={4}
      width={12}
      height={12}
      rx={1}
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLayers;
