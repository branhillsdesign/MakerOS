import * as React from "react";

const SvgLight = ({ title, titleId, ...props }) => (
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
      d="M12 2.6c.134 0 .267.003.4.008v18.784A9.4 9.4 0 1 1 12 2.6Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgLight;
