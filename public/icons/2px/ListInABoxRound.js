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
      strokeWidth={4}
      mask="url(#List_In_a_Box_Round_svg__a)"
    />
    <path
      d="M10 7a1 1 0 0 0 0 2V7Zm8 2a1 1 0 1 0 0-2v2ZM5.98 7a1 1 0 1 0 0 2V7Zm.52 2a1 1 0 0 0 0-2v2Zm3.5 2a1 1 0 1 0 0 2v-2Zm8 2a1 1 0 1 0 0-2v2ZM5.98 11a1 1 0 1 0 0 2v-2Zm.52 2a1 1 0 1 0 0-2v2Zm3.5 2a1 1 0 1 0 0 2v-2Zm8 2a1 1 0 1 0 0-2v2ZM5.98 15a1 1 0 1 0 0 2v-2Zm.52 2a1 1 0 1 0 0-2v2ZM10 9h8V7h-8v2ZM5.98 9h.52V7h-.52v2ZM10 13h8v-2h-8v2Zm-4.02 0h.52v-2h-.52v2ZM10 17h8v-2h-8v2Zm-4.02 0h.52v-2h-.52v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgListInaBoxRound;
