import * as React from "react";

const SvgWinterHat = ({ title, titleId, ...props }) => (
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
      d="M4 16.6h16v-1.2H4v1.2Zm16.4.4v3h1.2v-3h-1.2Zm-.4 3.4H4v1.2h16v-1.2ZM3.6 20v-3H2.4v3h1.2Zm.4.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 21.6v-1.2Zm16.4-.4a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2Zm-.4-3.4c.22 0 .4.18.4.4h1.2a1.6 1.6 0 0 0-1.6-1.6v1.2ZM4 15.4A1.6 1.6 0 0 0 2.4 17h1.2c0-.22.18-.4.4-.4v-1.2Zm.6.6A7.4 7.4 0 0 1 12 8.6V7.4A8.6 8.6 0 0 0 3.4 16h1.2ZM12 8.6a7.4 7.4 0 0 1 7.4 7.4h1.2A8.6 8.6 0 0 0 12 7.4v1.2ZM13.4 6A1.4 1.4 0 0 1 12 7.4v1.2A2.6 2.6 0 0 0 14.6 6h-1.2ZM12 7.4A1.4 1.4 0 0 1 10.6 6H9.4A2.6 2.6 0 0 0 12 8.6V7.4ZM10.6 6A1.4 1.4 0 0 1 12 4.6V3.4A2.6 2.6 0 0 0 9.4 6h1.2ZM12 4.6A1.4 1.4 0 0 1 13.4 6h1.2A2.6 2.6 0 0 0 12 3.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWinterHat;
