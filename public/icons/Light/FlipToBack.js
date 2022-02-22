import * as React from "react";

const SvgFliptoBack = ({ title, titleId, ...props }) => (
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
      id="Flip_to_Back_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={7}
      width={14}
      height={14}
    >
      <path
        d="M3 19h2v2H3v-2ZM7 19h2v2H7v-2ZM11 19h2v2h-2v-2ZM15 19h2v2h-2v-2ZM3 15h2v2H3v-2ZM3 11h2v2H3v-2ZM3 7h2v2H3V7Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Flip_to_Back_svg__a)">
      <mask
        id="Flip_to_Back_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={7}
        width={14}
        height={14}
      >
        <path d="M3 21V7h2.01v11.99H17V21H3Z" fill="#fff" />
      </mask>
      <g mask="url(#Flip_to_Back_svg__b)">
        <rect
          x={3.6}
          y={7.6}
          width={12.8}
          height={12.8}
          rx={1.4}
          stroke="#555770"
          strokeWidth={1.2}
        />
      </g>
    </g>
    <rect
      x={7.6}
      y={3.6}
      width={12.8}
      height={12.8}
      rx={1.4}
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgFliptoBack;
