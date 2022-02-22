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
      d="M11.103 12 2.6 4.347v15.306L11.103 12ZM21.103 12 12.6 4.347v15.306L21.103 12Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgFastForward;
