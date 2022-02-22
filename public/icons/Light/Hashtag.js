import * as React from "react";

const SvgHashtag = ({ title, titleId, ...props }) => (
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
      id="Hashtag_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={4}
      width={18}
      height={16}
    >
      <path fill="#fff" d="M3 4h18v16H3z" />
    </mask>
    <g mask="url(#Hashtag_svg__a)">
      <path
        d="M4 8.625h16m-16 6.75h16M16.571 3l-2.285 18M9.714 3 7.43 21"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgHashtag;
