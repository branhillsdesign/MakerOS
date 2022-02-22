import * as React from "react";

const SvgInfoi = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10.4} stroke="#555770" strokeWidth={1.2} />
    <path
      d="M13 16.5v.6-.6Zm-1-5h.6-.6Zm.6-3.5V6.5h-1.2V8h1.2ZM11 9.9H9.5v1.2H11V9.9Zm1.6 5.6v-4h-1.2v4h1.2Zm.4 1.6h1.5v-1.2H13v1.2Zm-1.6-1.6a1.6 1.6 0 0 0 1.6 1.6v-1.2a.4.4 0 0 1-.4-.4h-1.2Zm-.4-4.4c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 11 9.9v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgInfoi;
