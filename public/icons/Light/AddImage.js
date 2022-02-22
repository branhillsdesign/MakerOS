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
      d="M21.6 20V4h-1.2v16h1.2ZM4 21.6h16v-1.2H4v1.2ZM20 2.4h-8v1.2h8V2.4ZM2.4 12v8h1.2v-8H2.4Zm19.2-8A1.6 1.6 0 0 0 20 2.4v1.2c.22 0 .4.18.4.4h1.2Zm-1.2 16a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM4 20.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 21.6v-1.2Z"
      fill="#555770"
    />
    <path
      d="m5 17 5.6-7 3.4 4.454 1.5-1.909L19 17H5ZM6 2v8m4-4H2"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgAddImage;
