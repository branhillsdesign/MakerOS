import * as React from "react";

const SvgFlag01 = ({ title, titleId, ...props }) => (
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
      d="m15 10-.424-.424-.425.424.425.424L15 10Zm4.83-4.83.424.425-.425-.424ZM4.6 5V2.5H3.4V5h1.2Zm-.6.6h15.759V4.4H4v1.2Zm15.405-.854-4.83 4.83.85.848 4.829-4.829-.849-.849Zm-4.83 5.678 4.83 4.83.849-.849-4.83-4.83-.848.85ZM4.6 23v-8H3.4v8h1.2Zm0-8V5H3.4v10h1.2Zm15.159-.6H4v1.2h15.759v-1.2Zm-.354.854a.5.5 0 0 1 .354-.854v1.2a.7.7 0 0 0 .495-1.195l-.849.849Zm.354-9.654a.5.5 0 0 1-.354-.854l.849.849a.7.7 0 0 0-.495-1.195v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFlag01;
