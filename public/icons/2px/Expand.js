import * as React from "react";

const SvgExpand = ({ title, titleId, ...props }) => (
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
      d="M14 4h6v6m-6 10h6v-6M4 10V4h6M4 14v6h6"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgExpand;
