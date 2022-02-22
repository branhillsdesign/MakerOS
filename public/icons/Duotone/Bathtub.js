import * as React from "react";

const SvgBathtub = ({ title, titleId, ...props }) => (
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
    <mask id="Bathtub_svg__a" fill="#fff">
      <path d="M15 6.586A1.828 1.828 0 0 0 12.415 4L15 6.586Z" />
    </mask>
    <path
      d="M15 6.586 13.586 8 15 9.414 16.414 8 15 6.586ZM12.415 4 11 2.586 9.586 4 11 5.414 12.415 4Zm1.171 1.414a.172.172 0 0 1 0-.243L16.414 8a3.828 3.828 0 0 0 0-5.414l-2.828 2.828Zm.243 0a.172.172 0 0 1-.243 0l2.828-2.828a3.828 3.828 0 0 0-5.414 0l2.829 2.828Zm-2.829 0L13.586 8l2.828-2.829-2.585-2.585L11 5.414Z"
      fill="currentColor"
      mask="url(#Bathtub_svg__a)"
    />
    <path
      d="M6 12a1 1 0 0 0 1 1v1m-1-2a1 1 0 0 1 1-1c.339 0 .597.164.82.426C8.545 12.284 10.2 14 11 14H7m-1-2v2h1m12 0V4.828c0-1.781-2.154-2.674-3.414-1.414L14.5 4.5M8 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M11 14H6m-1 6H4a1 1 0 0 1-1-1v-5h18v5a1 1 0 0 1-1 1h-1M5 20v.9a.1.1 0 0 0 .1.1h13.8a.1.1 0 0 0 .1-.1V20M5 20h14"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBathtub;
