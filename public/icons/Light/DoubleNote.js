import * as React from "react";

const SvgDoubleNote = ({ title, titleId, ...props }) => (
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
      d="M8.402 18.174V7.79m11.994 10.23V6.79m0 0V4L8.402 5v2.79m11.994-1-11.994 1M8.4 18.1c0 1.17-1.188 2.3-2.9 2.3s-2.9-1.13-2.9-2.3c0-1.169 1.188-2.299 2.9-2.299s2.9 1.13 2.9 2.3Zm12 0c0 1.17-1.188 2.3-2.9 2.3s-2.9-1.13-2.9-2.3c0-1.169 1.188-2.299 2.9-2.299s2.9 1.13 2.9 2.3Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgDoubleNote;
