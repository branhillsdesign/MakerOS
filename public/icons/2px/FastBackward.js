import * as React from "react";

const SvgFastBackward = ({ title, titleId, ...props }) => (
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
      d="M3.495 12 11 5.245v13.51L3.495 12ZM13.495 12 21 5.245v13.51L13.495 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFastBackward;
