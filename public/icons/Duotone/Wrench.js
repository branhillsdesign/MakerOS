import * as React from "react";

const SvgWrench = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Wrench_svg__a)">
      <path
        d="M2.475 5.303a5.502 5.502 0 0 0 7.248 7.248l8.662 8.662a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-8.662-8.662a5.502 5.502 0 0 0-7.248-7.248L8.84 6.01 6.01 8.84 2.475 5.303Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Wrench_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={22}
        height={23}
      >
        <path
          d="m2.185 2.198 19.949 19.948.866-.866V8.5L14.691.206H4.177L2.185 2.198Z"
          fill="#000"
        />
      </mask>
      <g mask="url(#Wrench_svg__b)">
        <path
          d="M2.475 5.303a5.502 5.502 0 0 0 7.248 7.248l8.662 8.662a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-8.662-8.662a5.502 5.502 0 0 0-7.248-7.248L8.84 6.01 6.01 8.84 2.475 5.303Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Wrench_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWrench;
