import * as React from "react";

const SvgFastFood = ({ title, titleId, ...props }) => (
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
      id="Fast_Food_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={0}
      width={15}
      height={24}
    >
      <path d="M9 7V0h15v24h-6V7H9Z" fill="#fff" />
    </mask>
    <g mask="url(#Fast_Food_svg__a)">
      <path
        d="M17 1v5m0 0h5l-1.89 15.124a1 1 0 0 1-.993.876h-4.234a1 1 0 0 1-.992-.876L12 6h5Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <mask
      id="Fast_Food_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={8}
      width={17}
      height={16}
    >
      <path d="M17 8H0v16h17v-3H.5v-2H17v-2H.5v-2H17V8Z" fill="#fff" />
    </mask>
    <g mask="url(#Fast_Food_svg__b)">
      <path
        d="M2 14c0-2 3-4 6.5-4s6.5 2 6.5 4M2 14h13M2 14v4m13-4v4M2 18v3.9a.1.1 0 0 0 .1.1h12.8a.1.1 0 0 0 .1-.1V18M2 18h13"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgFastFood;
