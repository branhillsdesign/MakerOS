import * as React from "react";

const SvgAutoWhiteBalance = ({ title, titleId, ...props }) => (
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
      id="Auto_White_Balance_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={7}
      width={21}
      height={9}
    >
      <path fill="#fff" d="M3 7h21v9H3z" />
    </mask>
    <g mask="url(#Auto_White_Balance_svg__a)" stroke="#555770" strokeWidth={2}>
      <path d="m14 6 1.895 9h.473l1.895-7.5h.474l1.895 7.5h.473L23 6M4.5 16.5 5.735 13m5.765 3.5L10.265 13m0 0L8.5 8h-1l-1.765 5m4.53 0h-4.53" />
    </g>
    <circle cx={8} cy={12} r={7} stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgAutoWhiteBalance;
