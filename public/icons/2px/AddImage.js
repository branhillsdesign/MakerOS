import * as React from "react";

const SvgAddImage = ({ title, titleId, ...props }) => (
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
      d="M22 20V4h-2v16h2ZM4 22h16v-2H4v2ZM20 2h-8v2h8V2ZM2 12v8h2v-8H2Zm20-8a2 2 0 0 0-2-2v2h2Zm-2 16v2a2 2 0 0 0 2-2h-2ZM4 20H2a2 2 0 0 0 2 2v-2ZM5 17l5.6-7 3.4 4.454 1.5-1.909L19 17H5Z"
      fill="#555770"
    />
    <path d="M6 2v8m4-4H2" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgAddImage;
