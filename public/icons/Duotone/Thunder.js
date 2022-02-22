import * as React from "react";

const SvgThunder = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Thunder_svg__a)">
      <path
        d="M6 12.714 10.105 2h6.184l-4.105 7.143H18L6.71 22l3.422-9.286H6Z"
        stroke="#555770"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <mask
        id="Thunder_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={4}
        width={20}
        height={21}
      >
        <path
          transform="rotate(43.09 17.153 4.677)"
          fill="#000"
          d="M17.153 4.677h6.354v21.048h-6.354z"
        />
      </mask>
      <g mask="url(#Thunder_svg__b)">
        <path
          d="M6 12.714 10.105 2h6.184l-4.105 7.143H18L6.71 22l3.422-9.286H6Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Thunder_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgThunder;
