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
      strokeWidth={2.4}
      mask="url(#List_In_a_Box_Sharp_svg__a)"
    />
    <path
      d="M9 8.6h10V7.4H9v1.2Zm-4 0h2V7.4H5v1.2Zm4 4h10v-1.2H9v1.2Zm-4 0h2v-1.2H5v1.2Zm4 4h10v-1.2H9v1.2Zm-4 0h2v-1.2H5v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgListInaBoxSharp;
