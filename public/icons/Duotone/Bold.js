import * as React from "react";

const SvgBold = ({ title, titleId, ...props }) => (
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
      d="M7 12.5V19h6.563C15.46 19 17 17.545 17 15.75s-1.539-3.25-3.438-3.25H7Zm0 0h5.875c1.899 0 3.438-1.455 3.438-3.25S14.773 6 12.874 6H7v6.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Bold_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={1}
      width={6}
      height={22}
    >
      <path transform="matrix(-1 0 0 1 8 1)" fill="#000" d="M0 0h6v22H0z" />
    </mask>
    <g mask="url(#Bold_svg__a)">
      <path
        d="M7 12.5V19h6.563C15.46 19 17 17.545 17 15.75s-1.539-3.25-3.438-3.25H7Zm0 0h5.875c1.899 0 3.438-1.455 3.438-3.25S14.773 6 12.874 6H7v6.5Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBold;
