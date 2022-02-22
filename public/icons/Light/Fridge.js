import * as React from "react";

const SvgFridge = ({ title, titleId, ...props }) => (
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
      d="M6 21.6h12v-1.2H6v1.2ZM18 2.4H6v1.2h12V2.4ZM4.4 4v6h1.2V4H4.4Zm0 6v10h1.2V10H4.4Zm15.2 10V10h-1.2v10h1.2Zm0-10V4h-1.2v6h1.2ZM5 10.6h14V9.4H5v1.2ZM8.4 5v3h1.2V5H8.4Zm0 7v5h1.2v-5H8.4ZM18 3.6c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 18 2.4v1.2Zm0 18a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM6 20.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 21.6v-1.2Zm0-18A1.6 1.6 0 0 0 4.4 4h1.2c0-.22.18-.4.4-.4V2.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFridge;
