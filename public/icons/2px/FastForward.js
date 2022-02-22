import * as React from "react";

const SvgFastForward = ({ title, titleId, ...props }) => (
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
      d="M10.505 12 3 5.245v13.51L10.505 12ZM20.505 12 13 5.245v13.51L20.505 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFastForward;
