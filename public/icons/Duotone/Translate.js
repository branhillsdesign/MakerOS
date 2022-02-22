import * as React from "react";

const SvgTranslate = ({ title, titleId, ...props }) => (
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
      id="Translate_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={1}
      width={24}
      height={21}
    >
      <path d="M0 8h8V6.5H0V1h23.5v21h-12L16 10h-1l-4 10H0V8Z" fill="#fff" />
    </mask>
    <g mask="url(#Translate_svg__a)" strokeWidth={2}>
      <path
        d="M9 2v3m0 0H1m8 0h4.5M17 5h-3.5m0 0C12.833 7.333 9.8 13.2 3 18M5.5 7.5c.833 1.667 3.5 5.8 7.5 9"
        stroke="currentColor"
      />
      <path
        d="m22.5 23-1.875-5M12.5 23l1.875-5m0 0L17 11h1l2.625 7m-6.25 0h6.25"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgTranslate;
