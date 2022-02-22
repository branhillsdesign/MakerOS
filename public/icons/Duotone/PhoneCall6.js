import * as React from "react";

const SvgPhoneCall6 = ({ title, titleId, ...props }) => (
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
      d="M7.945 7.832A10.093 10.093 0 0 0 2.5 13.5l2.333 2.427a.1.1 0 0 0 .142.002l2.94-2.9a.1.1 0 0 0 .03-.07V7.831Zm0 0A10.224 10.224 0 0 1 12 7c1.442 0 2.813.297 4.055.832m0 0A10.093 10.093 0 0 1 21.5 13.5l-2.333 2.427a.1.1 0 0 1-.142.002l-2.94-2.9a.1.1 0 0 1-.03-.07V7.831Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Phone_Call_6_svg__a"
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
    <g mask="url(#Phone_Call_6_svg__a)">
      <path
        d="M7.945 7.832A10.093 10.093 0 0 0 2.5 13.5l2.333 2.427a.1.1 0 0 0 .142.002l2.94-2.9a.1.1 0 0 0 .03-.07V7.831Zm0 0A10.224 10.224 0 0 1 12 7c1.442 0 2.813.297 4.055.832m0 0A10.093 10.093 0 0 1 21.5 13.5l-2.333 2.427a.1.1 0 0 1-.142.002l-2.94-2.9a.1.1 0 0 1-.03-.07V7.831Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgPhoneCall6;
