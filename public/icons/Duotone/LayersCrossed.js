import * as React from "react";

const SvgLayersCrossed = ({ title, titleId, ...props }) => (
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
      id="Layers_Crossed_svg__a"
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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v2.866L23 20.168 21.503 21.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Layers_Crossed_svg__a)">
      <mask
        id="Layers_Crossed_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={11}
        width={24}
        height={12}
      >
        <path d="m12 19.797-12-8V23h24V11.797l-12 8Z" fill="#fff" />
      </mask>
      <g mask="url(#Layers_Crossed_svg__b)">
        <path
          d="m3 15 9-6 9 6-9 6-9-6Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
      <path
        d="m3 10 9-6 9 6-9 6-9-6ZM2.583 4 21 22.417"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgLayersCrossed;
