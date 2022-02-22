import * as React from "react";

const SvgSignalQuestion = ({ title, titleId, ...props }) => (
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
      d="M17 14.75c0-1.594 1.32-2.75 2.789-2.75a2.716 2.716 0 0 1 2.729 2.75c0 1.229-1.015 1.621-1.949 2.653-.531.587-.78 1.506-.78 1.916m0 1.016v1.667"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Signal_Question_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M16 0H0v24h14V9h10V0h-8Z" fill="#fff" />
    </mask>
    <g mask="url(#Signal_Question_svg__a)">
      <path d="M2 20 16.118 8v12H2Z" fill="currentColor" />
      <path d="M21 19H4.72L21 5.162V19Z" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgSignalQuestion;
