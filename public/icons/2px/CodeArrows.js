import * as React from "react";

const SvgCodeArrows = ({ title, titleId, ...props }) => (
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
      d="M9.707 6.707a1 1 0 0 0-1.414-1.414l1.414 1.414ZM3 12l-.707-.707a1 1 0 0 0 0 1.414L3 12Zm5.293 6.707a1 1 0 0 0 1.414-1.414l-1.414 1.414Zm6-1.414a1 1 0 0 0 1.414 1.414l-1.414-1.414ZM21 12l.707.707a1 1 0 0 0 0-1.414L21 12Zm-5.293-6.707a1 1 0 1 0-1.414 1.414l1.414-1.414Zm-7.414 0-6 6 1.414 1.414 6-6-1.414-1.414Zm-6 7.414 6 6 1.414-1.414-6-6-1.414 1.414Zm13.414 6 6-6-1.414-1.414-6 6 1.414 1.414Zm6-7.414-6-6-1.414 1.414 6 6 1.414-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCodeArrows;
