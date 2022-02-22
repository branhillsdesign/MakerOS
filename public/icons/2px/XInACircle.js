import * as React from "react";

const SvgXinaCircle = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="m15.293 7.293-4 4 1.414 1.414 4-4-1.414-1.414Zm-4 4-4 4 1.414 1.414 4-4-1.414-1.414Zm5.414 4-4-4-1.414 1.414 4 4 1.414-1.414Zm-4-4-4-4-1.414 1.414 4 4 1.414-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgXinaCircle;
