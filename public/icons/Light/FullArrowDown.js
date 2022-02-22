import * as React from "react";

const SvgFullArrowDown = ({ title, titleId, ...props }) => (
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
      d="m6.5 13 5.5 5.5m0 0 5.5-5.5M12 18.5V4"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgFullArrowDown;
