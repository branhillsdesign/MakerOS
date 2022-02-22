import * as React from "react";

const SvgLetterColor = ({ title, titleId, ...props }) => (
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
    <path d="M5 19h14" stroke="#555770" strokeWidth={2} />
    <mask
      id="Letter_Color_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={16}
    >
      <path fill="#fff" d="M0 0h24v16H0z" />
    </mask>
    <g mask="url(#Letter_Color_svg__a)">
      <path
        d="m17 17-1.875-5M7 17l1.875-5m0 0L11.5 5h1l2.625 7m-6.25 0h6.25"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgLetterColor;
