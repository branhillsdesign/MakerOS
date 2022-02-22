import * as React from "react";

const SvgHome = ({ title, titleId, ...props }) => (
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
      d="M19.586 11H19v10h-5v-7h-4v7H5V11h-.586L12 3.414 19.586 11Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Home_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={12}
      width={18}
      height={10}
    >
      <path transform="rotate(-90 3 22)" fill="#000" d="M3 22h10v18H3z" />
    </mask>
    <g mask="url(#Home_svg__a)">
      <path
        d="M19.586 11H19v10h-5v-7h-4v7H5V11h-.586L12 3.414 19.586 11Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgHome;
