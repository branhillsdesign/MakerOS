import * as React from "react";

const SvgListSharp = ({ title, titleId, ...props }) => (
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
      d="M3 4h2v2H3V4Zm0 7h2v2H3v-2Zm0 7h2v2H3v-2ZM9 4h12v2H9V4Zm0 7h12v2H9v-2Zm0 7h12v2H9v-2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgListSharp;
