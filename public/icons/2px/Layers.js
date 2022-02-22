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
      x={0}
      y={11}
      width={24}
      height={12}
    >
      <path d="m12 19.797-12-8V23h24V11.797l-12 8Z" fill="#fff" />
    </mask>
    <g mask="url(#Layers_svg__a)">
      <path d="m3 15 9-6 9 6-9 6-9-6Z" stroke="#555770" strokeWidth={2} />
    </g>
    <path d="m3 10 9-6 9 6-9 6-9-6Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgLayers;
