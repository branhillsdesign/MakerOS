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
      d="m19.57 17.403.74.67-.74-.67ZM17 14.751c0-.996.825-1.751 1.789-1.751v-2C16.817 11 15 12.556 15 14.75h2ZM18.789 13c.936 0 1.729.728 1.729 1.75h2a3.716 3.716 0 0 0-3.73-3.75v2Zm1.729 1.75c0 .266-.08.434-.341.703-.153.157-.328.307-.574.525a9.71 9.71 0 0 0-.775.754l1.483 1.342c.195-.216.4-.405.62-.6.207-.184.461-.402.68-.626.479-.493.907-1.135.907-2.097h-2Zm-1.69 1.982c-.38.419-.631.922-.788 1.354-.154.423-.251.874-.251 1.233h2c0-.052.027-.264.13-.55.1-.276.24-.526.392-.695l-1.483-1.342Zm-1.04 3.603v1.667h2v-1.667h-2Z"
      fill="#555770"
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
        d="M12 3c-3.256 0-6.321.82-9 2.263L12 21l9-15.737A18.916 18.916 0 0 0 12 3Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <path
        d="M12 7c-2.53 0-4.903.671-6.951 1.845L12 21l6.951-12.155A13.936 13.936 0 0 0 12.002 7Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgWifiQuestion;
