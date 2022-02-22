import * as React from "react";

const SvgAttachment = ({ title, titleId, ...props }) => (
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
      d="M5 8h12.5a4.5 4.5 0 1 1 0 9H5a3 3 0 1 1 0-6h11.5a1.5 1.5 0 0 1 0 3H5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAttachment;
