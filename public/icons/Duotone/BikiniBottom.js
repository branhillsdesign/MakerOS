import * as React from "react";

const SvgBikiniBottom = ({ title, titleId, ...props }) => (
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
      d="M3 9V7c.678.08 4.487.5 9 .5 4.512 0 8.322-.42 9-.5v2.011c-2.677.364-7.935 2.423-8 7.887a.102.102 0 0 1-.1.102h-1.8a.102.102 0 0 1-.1-.102C10.934 11.434 5.676 9.364 3 9Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Bikini_Bottom_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={1}
      width={12}
      height={22}
    >
      <path fill="#000" d="M12 1h12v22H12z" />
    </mask>
    <g mask="url(#Bikini_Bottom_svg__a)">
      <path
        d="M3 9V7c.678.08 4.487.5 9 .5 4.512 0 8.322-.42 9-.5v2.011c-2.677.364-7.935 2.423-8 7.887a.102.102 0 0 1-.1.102h-1.8a.102.102 0 0 1-.1-.102C10.934 11.434 5.676 9.364 3 9Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBikiniBottom;
