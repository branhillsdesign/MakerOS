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
      d="m20.57 17.403.74.67-.74-.67ZM18 14.751c0-.996.825-1.751 1.789-1.751v-2C17.817 11 16 12.556 16 14.75h2ZM19.789 13c.936 0 1.729.728 1.729 1.75h2a3.716 3.716 0 0 0-3.73-3.75v2Zm1.729 1.75c0 .266-.08.434-.341.703-.153.157-.328.307-.574.525a9.71 9.71 0 0 0-.775.754l1.483 1.342c.195-.216.4-.405.62-.6.207-.184.461-.402.68-.626.479-.493.907-1.135.907-2.097h-2Zm-1.69 1.982c-.38.419-.631.922-.788 1.354-.154.423-.251.874-.251 1.233h2c0-.052.027-.264.13-.55.1-.276.24-.526.392-.695l-1.483-1.342Zm-1.04 3.603v1.667h2v-1.667h-2Z"
      fill="#555770"
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
      <path d="M21 19H4.72L21 5.162V19Z" stroke="#555770" strokeWidth={2} />
      <path d="M2 20 16.118 8v12H2Z" fill="#555770" />
    </g>
  </svg>
);

export default SvgSignalQuestion;
