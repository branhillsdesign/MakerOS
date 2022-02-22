import * as React from "react";

const SvgLetterCheck = ({ title, titleId, ...props }) => (
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
      d="m16 18.5-.424.424.424.425.424-.425L16 18.5Zm.424.424 5.5-5.5-.848-.848-5.5 5.5.848.848Zm0-.848-3-3-.848.848 3 3 .848-.848Z"
      fill="#555770"
    />
    <mask
      id="Letter_Check_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={16}
    >
      <path d="M0 0h24v13H10v3H0V0Z" fill="#fff" />
    </mask>
    <g mask="url(#Letter_Check_svg__a)">
      <path
        d="m17 17-1.875-5M7 17l1.875-5m0 0L11.5 5h1l2.625 7m-6.25 0h6.25"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgLetterCheck;
