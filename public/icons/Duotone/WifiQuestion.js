import * as React from "react";

const SvgWifiQuestion = ({ title, titleId, ...props }) => (
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
      d="M16 14.75c0-1.594 1.32-2.75 2.789-2.75a2.716 2.716 0 0 1 2.729 2.75c0 1.229-1.015 1.621-1.949 2.653-.531.587-.78 1.506-.78 1.916m0 1.016v1.667"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Wifi_Question_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M16 0H0v24h13V9h11V0h-8Z" fill="#fff" />
    </mask>
    <g mask="url(#Wifi_Question_svg__a)">
      <path
        d="M12 7c-2.53 0-4.903.671-6.951 1.845L12 21l6.951-12.155A13.936 13.936 0 0 0 12.002 7Z"
        fill="currentColor"
      />
      <path
        d="M12 3c-3.256 0-6.321.82-9 2.263L12 21l9-15.737A18.916 18.916 0 0 0 12 3Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgWifiQuestion;
