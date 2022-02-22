import * as React from "react";

const SvgArrowDown = ({ title, titleId, ...props }) => (
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
      d="M2.293 7.707a1 1 0 0 1 1.414-1.414L2.293 7.707ZM12 16l.707.707-.707.707-.707-.707L12 16Zm8.293-9.707a1 1 0 1 1 1.414 1.414l-1.414-1.414Zm-16.586 0 9 9-1.414 1.414-9-9 1.414-1.414Zm7.586 9 9-9 1.414 1.414-9 9-1.414-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgArrowDown;
