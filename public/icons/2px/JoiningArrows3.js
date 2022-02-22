import * as React from "react";

const SvgJoiningArrows3 = ({ title, titleId, ...props }) => (
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
      d="M12 5v7.5l7.5 7.5m-15 0 5.379-5.379"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgJoiningArrows3;
