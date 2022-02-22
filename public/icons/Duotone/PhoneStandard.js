import * as React from "react";

const SvgPhoneStandard = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Phone_Standard_svg__a)">
      <path
        d="M17 4.5A1.5 1.5 0 0 0 15.5 3h-7A1.5 1.5 0 0 0 7 4.5m10 0H7m10 0v15M7 4.5v15m0 0A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5m-10 0h10"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Phone_Standard_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={-1}
        width={16}
        height={26}
      >
        <path d="M19.49 24.18 4.582-.065l15.067.187V24.18h-.159Z" fill="#000" />
      </mask>
      <g mask="url(#Phone_Standard_svg__b)">
        <path
          d="M17 4.5A1.5 1.5 0 0 0 15.5 3h-7A1.5 1.5 0 0 0 7 4.5m10 0H7m10 0v15M7 4.5v15m0 0A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5m-10 0h10"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Phone_Standard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPhoneStandard;
