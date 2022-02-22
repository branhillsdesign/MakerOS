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
    <circle cx={12} cy={12} r={9.4} stroke="#555770" strokeWidth={1.2} />
    <path
      d="m15.576 7.576-4 4 .848.848 4-4-.848-.848Zm-4 4-4 4 .848.848 4-4-.848-.848Zm4.848 4-4-4-.848.848 4 4 .848-.848Zm-4-4-4-4-.848.848 4 4 .848-.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgXinaCircle;
