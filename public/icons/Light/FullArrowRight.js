import * as React from "react";

const SvgFullArrowRight = ({ title, titleId, ...props }) => (
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
      d="m13 6.5 5.5 5.5m0 0L13 17.5m5.5-5.5H4"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgFullArrowRight;
