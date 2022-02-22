import * as React from "react";

const SvgFolder = ({ title, titleId, ...props }) => (
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
      d="m10.293 6.707.293.293H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.586l1.707 1.707Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Folder_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={8}
      width={22}
      height={14}
    >
      <path transform="rotate(-90 1 22)" fill="#000" d="M1 22h14v22H1z" />
    </mask>
    <g mask="url(#Folder_svg__a)">
      <path
        d="m10.293 6.707.293.293H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.586l1.707 1.707Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgFolder;
