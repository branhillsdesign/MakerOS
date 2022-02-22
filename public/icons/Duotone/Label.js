import * as React from "react";

const SvgLabel = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Label_svg__a)">
      <path
        d="M4 17V7a1 1 0 0 1 1-1h11a1 1 0 0 1 .8.4L21 12l-4.2 5.6a1 1 0 0 1-.8.4H5a1 1 0 0 1-1-1Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Label_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={12}
        width={22}
        height={12}
      >
        <path transform="rotate(90 23 12)" fill="#000" d="M23 12h12v22H23z" />
      </mask>
      <g mask="url(#Label_svg__b)">
        <path
          d="M4 17V7a1 1 0 0 1 1-1h11a1 1 0 0 1 .8.4L21 12l-4.2 5.6a1 1 0 0 1-.8.4H5a1 1 0 0 1-1-1Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Label_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLabel;
