import * as React from "react";

const SvgListInaBoxSharp = ({ title, titleId, ...props }) => (
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
    <mask id="List_In_a_Box_Sharp_svg__a" fill="#fff">
      <rect x={1} y={1} width={22} height={22} rx={1} />
    </mask>
    <rect
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      stroke="#555770"
      strokeWidth={4}
      mask="url(#List_In_a_Box_Sharp_svg__a)"
    />
    <path
      d="M9 8h10M5 8h2m2 4h10M5 12h2m2 4h10M5 16h2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgListInaBoxSharp;
