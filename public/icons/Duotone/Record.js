import * as React from "react";

const SvgRecord = ({ title, titleId, ...props }) => (
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
      d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Record_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <path d="M21 21 3 3v18h18Z" fill="#000" />
    </mask>
    <g mask="url(#Record_svg__a)">
      <path
        d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgRecord;
