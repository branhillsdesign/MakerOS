import * as React from "react";

const SvgListInaBoxRound = ({ title, titleId, ...props }) => (
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
    <mask id="List_In_a_Box_Round_svg__a" fill="#fff">
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
      mask="url(#List_In_a_Box_Round_svg__a)"
    />
    <path
      d="M9.5 7.4a.6.6 0 0 0 0 1.2V7.4ZM18 8.6a.6.6 0 1 0 0-1.2v1.2ZM5.98 7.4a.6.6 0 0 0 0 1.2V7.4Zm.52 1.2a.6.6 0 0 0 0-1.2v1.2Zm3 2.8a.6.6 0 1 0 0 1.2v-1.2Zm8.5 1.2a.6.6 0 1 0 0-1.2v1.2ZM5.98 11.4a.6.6 0 1 0 0 1.2v-1.2Zm.52 1.2a.6.6 0 1 0 0-1.2v1.2Zm3 2.8a.6.6 0 1 0 0 1.2v-1.2Zm8.5 1.2a.6.6 0 1 0 0-1.2v1.2ZM5.98 15.4a.6.6 0 1 0 0 1.2v-1.2Zm.52 1.2a.6.6 0 1 0 0-1.2v1.2Zm3-8H18V7.4H9.5v1.2Zm-3.52 0h.52V7.4h-.52v1.2Zm3.52 4H18v-1.2H9.5v1.2Zm-3.52 0h.52v-1.2h-.52v1.2Zm3.52 4H18v-1.2H9.5v1.2Zm-3.52 0h.52v-1.2h-.52v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgListInaBoxRound;
