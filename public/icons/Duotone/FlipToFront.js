import * as React from "react";

const SvgFliptoFront = ({ title, titleId, ...props }) => (
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
      id="Flip_to_Front_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={7}
      width={14}
      height={14}
    >
      <path d="M3 21V7h2v12h12v2H3Z" fill="#fff" />
    </mask>
    <g mask="url(#Flip_to_Front_svg__a)">
      <rect
        x={4}
        y={8}
        width={12}
        height={12}
        rx={1}
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <mask
      id="Flip_to_Front_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={7}
      y={3}
      width={14}
      height={14}
    >
      <path
        d="M7 3h2v2H7V3ZM11 3h2v2h-2V3ZM7 15h2v2H7v-2ZM7 11h2v2H7v-2ZM7 7h2v2H7V7ZM11 15h2v2h-2v-2ZM15 15h2v2h-2v-2ZM19 3h2v2h-2V3ZM15 3h2v2h-2V3ZM19 15h2v2h-2v-2ZM19 11h2v2h-2v-2ZM19 7h2v2h-2V7Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Flip_to_Front_svg__b)">
      <rect
        x={8}
        y={4}
        width={12}
        height={12}
        rx={1}
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgFliptoFront;
