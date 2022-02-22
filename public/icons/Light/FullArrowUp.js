import * as React from "react";

const SvgFullArrowUp = ({ title, titleId, ...props }) => (
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
      d="M6.5 11 12 5.5m0 0 5.5 5.5M12 5.5V20"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgFullArrowUp;
