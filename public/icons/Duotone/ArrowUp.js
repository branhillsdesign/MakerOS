import * as React from "react";

const SvgArrowUp = ({ title, titleId, ...props }) => (
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
    <path d="m12 8 9 9" stroke="currentColor" strokeWidth={2} />
    <path d="m3 17 9.706-9.706" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgArrowUp;
