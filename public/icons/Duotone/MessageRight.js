import * as React from "react";

const SvgMessageRight = ({ title, titleId, ...props }) => (
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
      d="M4 4h16a1 1 0 0 1 1 1v14.792a.1.1 0 0 1-.163.078L17.25 17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Message_Right_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={11}
      height={22}
    >
      <path transform="matrix(-1 0 0 1 12 1)" fill="#000" d="M0 0h11v22H0z" />
    </mask>
    <g mask="url(#Message_Right_svg__a)">
      <path
        d="M4 4h16a1 1 0 0 1 1 1v14.792a.1.1 0 0 1-.163.078L17.25 17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgMessageRight;
