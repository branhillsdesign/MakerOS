import * as React from "react";

const SvgSignal01 = ({ title, titleId, ...props }) => (
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
      d="M21.4 19.4H3.632L21.4 4.297V19.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgSignal01;
